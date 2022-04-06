const errorHandler = require('../errorHandler')
const Segment = require('../datasources/models/segment')
const Club = require('../datasources/models/club')
const { v1 } = require('uuid')
const uuid = v1

module.exports = {

  createClub: async (root, args) => {
    const club = new Club({ ...args, id: uuid })
    try {
      await club.save()
    } catch (error) {
      errorHandler(error)
    }
    return club
  },
  updateClub: async (root, args) => {
    const club = await Club.findOne({ _id: args.id })
    if (club != null) {
      club.clubName = args.clubName
    }
  },
  deleteClub: async (root, args) => {
    const club = await Club.findOne({ _id: args.id })
    if (club != null) {
      const clubDate = club.clubName
      removeClub = `The Club ${clubDate} was removed`
      Club.deleteOne({ _id: args.id }).exec()
      return removeClub
    } else return `The Club ${args.clubName} don't found`
  },
  deleteAllClub: async (root, args) => {
    await Club.deleteMany({}).exec()
    return 'All clubes were eliminated'
  },
  addSegmentToClub: async (root, { segmentID, clubID }) => {
    let club
    let segment
    try {
      club = await Club.findOne({ _id: clubID })
      console.log(club)
      segment = await Segment.findOne({ _id: segmentID })
      console.log(segment)
      if (!club | !segment) throw new Error('El club o el segmento no se encontró')
      club.segments = club.segments.concat(segment)
      club.save()
    } catch (error) {
      errorHandler(error)
    }
    return club
  }
}
