const { gql } = require("apollo-server-express");

const typeDefs = gql`
# Inputs
input RoomInput {
    name: String
    description: String
    rate: Float
    capacity: Int
    isAvilable: Boolean
    wifi: Boolean
    food: Boolean
}

# Types
type Room {
    id: ID
    name: String!
    description: String!
    rate: Float
    capacity: Int!
    isAvilable: Boolean!
    wifi: Boolean
    food: Boolean
}

type Staff {
    id: ID
    fullName: String
    email: String
    position: String
    access: Boolean
    sudo: Boolean
}

type Customer {
    id: ID
    fullName: String!
    email: String!
    phoneNumber: String
    country: String
    pin: String
}

type Reservation {
    id: ID
    room: Room!
    customer: Customer!
    staff: Staff
    status: String
    bookedDate: String
    acceptedData: String
}

# Queries
type Query {
    hello: String
    allRooms: [Room]
}

# Mutations
 type Mutation {
     addRoom(input: RoomInput!): Room!
 }

`;

module.exports = typeDefs;