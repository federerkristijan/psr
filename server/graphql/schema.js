import { buildSchema } from "graphql";

export default buildSchema(`


type User {
    _id: ID
    firstName: String
    email: String!
    password: String
    status: String
    token: String
}


type AuthData {
    token: String!
    userId: String!
}

input UserInputData {
    firstName: String
    password: String!
    email: String!
    country: String
    lastName: String
    city: String
    street: String
    streetNumber: String
    zipCode: String
    loginPassword: String
    loginEmail: String
}



type RootMutation {
    createUser(userInput: UserInputData): User!
   
}

type rootQuery{
        login(loginEmail: String!, loginPassword:String!): AuthData!
    }

schema {
     query: rootQuery
  mutation: RootMutation
}

`);