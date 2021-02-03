import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import { connect } from "./database";


const app = express();
connect();


// Settings
app.set('port', process.env.PORT || 3000);


// Middlewares
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));


// Starting the server. 
app.listen(app.get('port'), () => {
    console.log(`Server on port: ${app.get('port')}`);
});