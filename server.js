const express = require("express");
const app = express();
const db = require("./db");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");

const cors = require("cors");
app.use(cors());

app.use(express.json());

const root = {
  getAllPersons: async () => {
    const persons = await db.query("select * from person");
    return persons.rows;
  },
  getPerson: async ({ id }) => {
    const person = await db.query("select * from person where id = $1", [id]);
    return person.rows[0];
  },
  createPerson: async ({ input: personData }) => {
    const person = await db.query(
      "insert into person (name, lastname) values ($1, $2) returning *",
      [personData.name, personData.lastname]
    );
    return person.rows[0];
  },
  createPost: async ({ input: postData }) => {
    const post = await db.query(
      "insert into post (title, content) values ($1, $2) returning *",
      [postData.name, postData.lastname]
    );
    return post.rows[0];
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  })
);

app.listen(5000, () => console.log("Port 5000 is running"));
