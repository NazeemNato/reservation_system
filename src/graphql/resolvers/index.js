const test_resolver = require("./test_resolver")
const room_resolver = require("./room_resolver")

module.exports = {
    Query: {
        ...test_resolver.Query,
        ...room_resolver.Query
    },
    Mutation: {
        ...room_resolver.Mutation
    }
}