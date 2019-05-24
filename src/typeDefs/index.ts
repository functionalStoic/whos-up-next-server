// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.

export default `
# Comments in GraphQL are defined with the hash (#) symbol.

type User {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  createdAt: String
  updatedAt: String
}

type UserPayload {
  user: User
  error: String
}

type Category {
  id: ID!
  title: String!
  description: String!
  people: [Person!]
  createdAt: String
  updatedAt: String
}

type CategoryPayload {
  category: Category
  error: String
}

type Event {
  id: ID!
  title: String!
  description: String!
  people: [Person!]
  createdAt: String
  updatedAt: String
}

type EventPayload {
  event: Event
  error: String
}

type Person {
  id: ID!
  firstName: String!
  lastName: String!
  description: String!
  category: Category!
  events: [Event!]
  createdAt: String
  updatedAt: String
}

input EventInput {
  title: String!
  description: String!
}

input CategoryInput {
  title: String!
  description: String!
}

input PersonInput {
  firstName: String!
  lastName: String!
  category: CategoryInput!
  events: [EventInput!]
}

input GenericIdInput {
  id: ID!
}

type PersonPayload {
  person: Person
  error: String
}

# The "Query" type is the root of all GraphQL queries.
# (A "Mutation" type will be covered later on.)
type Query {
  users: [User]
  categories: [Category]
  events: [Event]
  people: [Person]
}

type Mutation {
  createUser(
    firstName: String!
    lastName: String!
    email: String!
  ): UserPayload
  createCategory(
    title: String!
    description: String!
    people: [GenericIdInput!]
  ): CategoryPayload
  createEvent(
    title: String!
    description: String!
    people: [GenericIdInput!]
  ): EventPayload
  createPerson(firstName: String!, lastName: String!, description: String!, category: ID!): PersonPayload
}
`;
