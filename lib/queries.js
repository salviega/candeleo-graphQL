const Cyclist = require('./datasources/models/cyclist')
const Segment = require('./datasources/models/segment')
const Club = require('./datasources/models/club')
const Event = require('./datasources/models/event')
const Ranking = require('./datasources/models/ranking')

const query = {
  cyclistCount: () => Cyclist.collection.countDocuments(),
  allCyclist: async (root, args) => {
    if (!args.PR) return await Cyclist.find({})
    // return await Cyclist.find({ PR: {$exists: args.PR === 'YES'}})
  },
  findCyclist: async (root, args) => {
    const { id } = args
    return await Cyclist.findOne({ _id: id })
  },

  segmentCount: () => Segment.collection.countDocuments(),
  allSegment: async (root, args) => {
    return await Segment.find({})
  },
  findSegment: async (root, args) => {
    const { id } = args
    return await Segment.findOne({ _id: id })
  },

  clubCount: () => Club.collection.countDocuments(),
  allClub: async (root, args) => {
    return await Club.find({})
  },
  findClub: async (root, args) => {
    const { id } = args
    return await Club.findOne({ _id: id })
  },

  eventCount: () => Event.collection.countDocuments(),
  allEvent: async (root, args) => {
    return await Event.find({})
  },
  findEvent: async (root, args) => {
    const { id } = args
    return await Event.findOne({ _id: id })
  },

  rankingCount: () => Ranking.collection.countDocuments(),
  allRanking: async (root, args) => {
    return await Ranking.find({})
  },
  findRanking: async (root, args) => {
    const { id } = args
    return await Ranking.findOne({ _id: id })
  }
}

module.exports = query
