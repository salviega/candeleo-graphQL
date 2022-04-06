const { gql } = require('apollo-server')

const typeDefs = gql`
    
    enum YesNo {
        YES
        NO
    }

    type Cyclist {
        id: ID!
        position: String!
        cyclistName: String!
        time: String!
        difference: String!
        PR: String!
        speed: String!
    }    

    type Segment {
        id: ID!
        segmentName: String!
        cyclists: [Cyclist]
    }

    type Club {
        id: ID!
        clubName: String!
        segments: [Segment]
    }

    type Event {
        id: ID!
        eventName: String!
        segments: [Segment]
    }

    type Ranking {
        id: ID!
        date: String!    
        following: [Segment]
        rode: [Segment]
        clubes: [Club]
        events: [Event]
    }

    type Query {
        cyclistCount: Int!
        allCyclist(PR: YesNo): [Cyclist]!
        findCyclist(id: ID!): Cyclist

        segmentCount: Int!
        allSegment: [Segment]!
        findSegment(id: ID!): Segment

        clubCount: Int!
        allClub: [Club]
        findClub(id: ID!): Club

        eventCount: Int!
        allEvent: [Event]
        findEvent(id: ID!) : Event

        rankingCount: Int!
        allRanking: [Ranking]
        findRanking(id: ID!): Ranking
    }

    input CyclistInput {
        position: String
        cyclistName: String
        time: String
        difference: String
        PR: String
        speed: String
    }

    input SegmentInput {
        segmentName: String
    }

    input ClubInput {
        clubName: String
    }

    input EventInput {
        eventName: String
    }

    input RankingInput {
        date: String
    }

    type Mutation {

        createCyclist(
             position: String!,
             cyclistName: String!,
             time: String!,
             difference: String!,
             PR: String!,
             speed: String!,
        ): Cyclist

        createSegment(
            segmentName: String!
        ): Segment

        createClub(
            clubName: String!
        ): Club

        createEvent(
            eventName: String!
        ): Event

        createRanking(
             date: String!
        ): Ranking
       
        updateCyclist(id: ID!, input: CyclistInput!): Cyclist
        deleteCyclist(id: ID!): String
        deleteAllCyclist: String

        updateSegment(id: ID!, input: SegmentInput!): Segment
        deleteSegment(id: ID!): String
        deleteAllSegment: String

        updateClub(id: ID!, input: ClubInput!): Club
        deleteClub(id: ID!): String
        deleteAllClub: String

        updateEvent(id: ID!, input: EventInput!): Event
        deleteEvent(id: ID!): String
        deleteAllEvent: String

        updateRanking(id: ID!, input: RankingInput!): Ranking
        deleteRanking(date: String!): String
        deleteAllRanking: String

        addCyclist(segmentID: ID!, cyclistID: ID!): Segment
        addSegmentToClub(segmentID: ID!, clubID: ID!): Club
        addSegmentToEvent(segmentID: ID!, eventID: ID!): Event 
        addFollowing(rankingID: ID!, segmentID: ID!): Ranking
        addRode(rankingID: ID!, segmentID: ID!): Ranking
        addClub(rankingID: ID!, clubID: ID!): Ranking
        addEvent(rankingID: ID!, eventID: ID!): Ranking

    }
`
module.exports = typeDefs
