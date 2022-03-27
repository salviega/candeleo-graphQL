const { gql } = require('apollo-server')

const typeDefs = gql`
    
    type Ranking {
        id: ID!
        date: String!
        following: [Following]
        rode: [Rode]
        club: [Club]
        event: [Event]
    }

    type Following {
        name: String!
        segment: [Segment]!
    }

    type Rode {
        name: String!
        segment: [Segment]!
    }

    type Club {
        name: String!
        segment: [Segment]!
    }

    type Event {
        name: String!
        segment: [Segment]!
    }
    
    type Segment {
        name: String!
        cyclists: [Cyclist]!
    }
    
    type Cyclist {
        position: String!
        name: String!
        time: String!
        difference: String!
        PR: String!
        speed: String!
    }
    
    type Query {
        rankingCount: Int!
        allRanking: [Ranking]
        findRanking(date: String!): Ranking
    }

    type Mutation {
        addRanking(
            date: String!
            following: String
            rode: String
            club: String
            event: String
            
        ): Ranking
        deleteRanking(date: String!): String
    }
`

module.exports = typeDefs
// export default {typeDefs}
