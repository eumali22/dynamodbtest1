aws dynamodb execute-statement `
    --statement "SELECT * FROM Music
                WHERE Artist='Acme Band' AND SongTitle='Happy Day'" `
    --endpoint-url http://localhost:8000