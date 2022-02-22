aws dynamodb execute-statement `
    --statement "INSERT INTO Music VALUE {'Artist':'No One You Know','SongTitle':'Call Me Today', 'AlbumTitle':'Somewhat Famous', 'Awards':'1'}" `
    --endpoint-url http://localhost:8000

aws dynamodb execute-statement `
    --statement "INSERT INTO Music 
                VALUE 
                {'Artist':'No One You Know','SongTitle':'Howdy', 'AlbumTitle':'Somewhat Famous', 'Awards':'2'}" `
    --endpoint-url http://localhost:8000

aws dynamodb execute-statement `
    --statement "INSERT INTO Music  
                VALUE  
                {'Artist':'Acme Band','SongTitle':'Happy Day', 'AlbumTitle':'Songs About Life', 'Awards':'10'}" `
    --endpoint-url http://localhost:8000
                            
aws dynamodb execute-statement `
    --statement "INSERT INTO Music  
                VALUE  
                {'Artist':'Acme Band','SongTitle':'PartiQL Rocks', 'AlbumTitle':'Another Album Title', 'Awards':'8'}" `
    --endpoint-url http://localhost:8000