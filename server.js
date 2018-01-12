import express from 'express';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './schema.js'
const server = express();
const port = 3030;

server.use('/graphiql', graphiqlExpress({
    endpointURL: "/graphql"
}));

/*
server.use('/graphql', graphqlExpress({}));
*/

// use body-parser as middleware, expects a GraphQL Schema set 
server.use('/graphql',bodyParser.json(), graphqlExpress({schema}));


server.listen(port, () => {
    console.log("listening on port: ", port)
});







/*
server.get('/graphql', (req,res) => {
    res.send(
            `<html>
                <body>s
                    <h1>Hi!</h1>
                </body>
            </html>`
        )
})
*/