import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { run } from './ddbdoc_query_item.js';

const app = express();
const port = 4000;



app.use(cors());

// Configure body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/transactions', (req, res) => { // query all
    run().then((data) => res.json(data.Items));
});


app.listen(port, () => console.log("listening on port ${port}"));