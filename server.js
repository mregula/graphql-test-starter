import express from 'express';
import expressGraphQL from 'express-graphql';
import schema from './graphql/schema';

const app = express();

app.use('/graphql', expressGraphQL({
  schema, //schema: schema - ES6 syntax
  graphiql: true,
  pretty: true //If true, any JSON response will be pretty-printed.
}));

app.use('/test', (req, res) => res.send("Hello worldsss"));

app.listen(4000, () => {
  console.log("LISTENING");
});