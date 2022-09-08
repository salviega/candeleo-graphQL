const errorHandler = require('../errorHandler')
const Segment = require('../datasources/models/segment')
const Club = require('../datasources/models/club')
const Event = require('../datasources/models/event')
const Ranking = require('../datasources/models/ranking')
const { v1 } = require('uuid')
const uuid = v1

module.exports = {
  createRanking: async (root, args) => {
    const ranking = new Ranking({ ...args, id: uuid })
    try {
      await ranking.save()
    } catch (error) {
      errorHandler(error)
    }
    return ranking
  },
  updateRanking: async (root, args) => {
    const ranking = await Ranking.findOne({ date: args.date })
    if (ranking != null) {
      ranking.date = args.date
    }
  },
  deleteRanking: async (root, args) => {
    const ranking = await Ranking.findOne({ date: args.date })
    if (ranking != null) {
      const rankingDate = ranking.date
      const removeranking = `The Cyclist ${rankingDate} was removed`
      Ranking.deleteOne({ date: args.date }).exec()
      return removeranking
    } else return `The Ranking of the date ${args.date} don't found`
  },
  deleteAllRanking: async (root, args) => {
    await Ranking.deleteMany({}).exec()
    return 'All rankings were eliminated'
  },
  addFollowing: async (root, { rankingID, segmentID }) => {
    let ranking
    let segment
    try {
      ranking = await Ranking.findOne({ _id: rankingID })
      console.log(ranking)
      segment = await Segment.findOne({ _id: segmentID })
      console.log(segment)
      if (!ranking | !segment) throw new Error('El ranking o el segmento no se encontró')
      ranking.following = ranking.following.concat(segment)
      ranking.save()
    } catch (error) {
      errorHandler(error)
    }
    return ranking
  },
  addRode: async (root, { rankingID, segmentID }) => {
    let ranking
    let segment
    try {
      ranking = await Ranking.findOne({ _id: rankingID })
      segment = await Segment.findOne({ _id: segmentID })
      if (!ranking | !segment) throw new Error('El ranking o el segmento no se encontró')
      ranking.rode = ranking.rode.concat(segment)
      ranking.save()
    } catch (error) {
      errorHandler(error)
    }
    return ranking
  },
  addClub: async (root, { rankingID, clubID }) => {
    let ranking
    let club
    try {
      ranking = await Ranking.findOne({ _id: rankingID })
      club = await Club.findOne({ _id: clubID })
      if (!ranking | !club) throw new Error('El ranking o el club no se encontró')
      ranking.clubes = ranking.clubes.concat(club)
      ranking.save()
    } catch (error) {
      errorHandler(error)
    }
    return ranking
  },
  addEvent: async (root, { rankingID, eventID }) => {
    let ranking
    let event
    try {
      ranking = await Ranking.findOne({ _id: rankingID })
      event = await Event.findOne({ _id: eventID })
      if (!ranking | !event) throw new Error('El ranking o el evento no se encontró')
      ranking.events = ranking.events.concat(event)
      ranking.save()
    } catch (error) {
      errorHandler(error)
    }
    return ranking
  }
}
