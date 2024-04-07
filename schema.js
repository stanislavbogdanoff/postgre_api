const { buildSchema } = require("graphql");

const schema = buildSchema(`
    
    type Person {
        id: ID
        name: String
        lastname: String
        age: Int
        posts: [Post]
    }
    type Post {
        id: ID
        title: String
        content: String
    }
    
    input PersonInput {
        name: String!
        lastname: String
        age: Int
        posts: [PostInput]
    }
    input PostInput {
        title: String!
        content: String!
    }
    
    type Query {
        getAllPersons: [Person]
        getPerson(id: ID): Person
        getAllPosts: [Post]
        getPost(id: ID): Post
    }
    type Mutation {
        createPerson(input: PersonInput): Person
        createPost(input: PostInput): Post
    }

`);

module.exports = schema;
