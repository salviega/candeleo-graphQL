const { gql } = require('apollo-server')

const typeDefs = gql`
    
    type Cyclist {
        position: String!
        cyclistName: String!
        time: String!
        difference: String!
        PR: String!
        speed: String!
    }    

    type Segment {
        segmentName: String!
        cyclist: [Cyclist]!
        
    }    

    type Following {
        followingName: String!
        segment: [Segment]!
    }

    type Ranking {
        id: ID!
        date: String!    
        following: Following!
    }

    type Query {
        rankingCount: Int!
        allRanking: [Ranking]
        findRanking(date: String!): Ranking
    }

    type Mutation {

        addCyclist(
             position: String!,
             cyclistName: String!,
             time: String!,
             difference: String!,
             PR: String!,
             speed: String!,
        ): Cyclist
        addSegment(
            segmentName: String!
            position: String!,
            cyclistName: String!,
            time: String!,
            difference: String!,
            PR: String!,
            speed: String!,
        ): Segment
        addFollowing(
             followingName: String!,
             segmentName: String!
             position: String!
             cyclistName: String!
             time: String!
             difference: String!
             PR: String!
             speed: String!

        ): Following
        addRanking(
             date: String!,
             followingName: String!,
             segmentName: String!
             position: String!
             cyclistName: String!
             time: String!
             difference: String!
             PR: String!
             speed: String!
             ): Ranking
        editRanking(date: String!): Ranking
        deleteRanking(date: String!): String
        deleteAllRanking: String
    }
`

module.exports = typeDefs
// export default {typeDefs}
