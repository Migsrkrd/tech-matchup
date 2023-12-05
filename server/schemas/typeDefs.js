const typeDefs = `
    type Tech {
        _id: ID
        name: String
    }

    type Matchup {
        _id: ID
        tech1: String
        tech2: String
        tech1_votes: Int
        tech2_votes: Int
    }

    type Query {
        technologies: [Tech]
        matchups: [Matchup]
        matchup(matchupId: ID!): Matchup
    }

    type Mutations {
        createMatchup(tech1Id: ID!, tech2Id: ID!): Matchup
        createVote(matchupId: ID!, techNum: Int): Matchup
    }
`

module.exports = typeDefs;