const Cyclist = require('./datasources/models/cyclist')
const Segment = require('./datasources/models/segment')
const Following = require('./datasources/models/following')
const Ranking = require('./datasources/models/ranking')
const { v1 } = require('uuid')
const uuid = v1

// const types = require('./types')

module.exports = {
  Query: {
    rankingCount: () => Ranking.collection.countDocuments(),
    allRanking: async (root, args) => {
      return Ranking.find({})
    },
    findRanking: async (root, args) => {
      const { date } = args
      return Ranking.findOne({ date })
    }
  },/*
  Segment: {
    cyclist: (root) => {
      return {
         position: root.position,
         cyclistName: root.cyclistName,
         time: root.time,
         difference: root.difference,
         PR: root.PR,
         speed: root.speed
      }
    }
  },
  Following: {
     segment: (root) => {
      return {
        segmentName: root.segmentName,
        cyclist: {
          position: root.position,
          cyclistName: root.cyclistName,
          time: root.time,
          difference: root.difference,
          PR: root.PR,
          speed: root.speed
        }
      }
    }
  },*/
  Ranking: {
    following: (root) => {
      return {
        followingName: root.followingName,
        segment: [{
          segmentName: root.segmentName,
          cyclist: [{
            position: root.position,
            cyclistName: root.cyclistName,
            time: root.time,
            difference: root.difference,
            PR: root.PR,
          speed: root.speed
          }]
        }],
      }
    }
  },
  Mutation: {
    addCyclist: async (root, args) => {
      const cyclist = new Cyclist({...args, id: uuid })
      try {
        await cyclist.save()
      } catch (error) {
        console.log(error)
      }
      return cyclist
    },
    addSegment: async (root, args) => {
      const segment = new Segment({...args, id: uuid })
      try {
        await segment.save()
      } catch (error) {
        console.log(error)
      }
      return segment
    },
    addFollowing: async (root, args) => {
      const following = new Following({...args, id: uuid })
      try {
        await following.save()
      } catch (error) {
        console.log(error)
      }
      return following
    },
    addRanking: async (root, args) => {
      const ranking = new Ranking({ ...args, id: uuid })
      try {
        await ranking.save()
      } catch (error) {
        console.log(error)
      }
      return ranking
    },
    editRanking: async (root, args) => {
      const ranking = await Ranking.findOne({ date: args.date })
      if (ranking != null) {
        ranking.date = args.date
        ranking.following = args.following
        ranking.rode = args.rode
        ranking.club = args.club
        ranking.event = args.event
      }
    },
    deleteRanking: async (root, args) => {
      const ranking = await Ranking.findOne({ date: args.date })
      if (ranking != null) {
        const rankingDate = ranking.date
        removeranking = `The Cyclist ${rankingDate} was removed`
        Ranking.deleteOne({ date: args.date }).exec()
        return removeranking
      } else return `The Cyclist ${args.date} don't found`
    },
    deleteAllRanking: async (root, args) => {
      await Ranking.deleteMany({}).exec()
      return `All Cyclists were eliminated`
    },
  }
}
