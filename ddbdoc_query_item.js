import { QueryCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "./libs/ddbDocClient.js";

// Set the parameters
export const params = {
  TableName: "TrackYourBudget",
  /*
  Convert the JavaScript object defining the objects to the required
  Amazon DynamoDB record. The format of values specifies the datatype. The
  following list demonstrates different datatype formatting requirements:
  String: "String",
  NumAttribute: 1,
  BoolAttribute: true,
  ListAttribute: [1, "two", false],
  MapAttribute: { foo: "bar" },
  NullAttribute: null
   */
  ExpressionAttributeValues: {
    ":a": "user_1",
    ":b": "user_1#acct_1#trans_",
  },
  ExpressionAttributeNames: {
    "#c": "value",
  },
  KeyConditionExpression: "PK = :a AND begins_with ( SK, :b )",
  ProjectionExpression: "SK, trans_date, #c, is_outflow",
};

export const run = async () => {
  try {
    const data = await ddbDocClient.send(new QueryCommand(params));
    console.log("Success. Item details: ", data);
    // console.log("Success. Item details: ", data.Items);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
