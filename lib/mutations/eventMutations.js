const errorHandler = require('../errorHandler')
const Segment = require('../datasources/models/segment')
const Event = require('../datasources/models/event')
const { v1 } = require('uuid')
const uuid = v1

module.exports = {

  createEvent: async (root, args) => {
    const event = new Event({ ...args, id: uuid })
    try {
      await event.save()
    } catch (error) {
      errorHandler(error)
    }
    return event
  },
  updateEvent: async (root, args) => {
    const event = await Event.findOne({ _id: args.id })
    if (event != null) {
      event.eventName = args.eventName
    }
  },
  deleteEvent: async (root, args) => {
    const event = await Event.findOne({ _id: args.id })
    if (event != null) {
      const eventDate = event.eventName
      removeEvent = `The Event ${eventDate} was removed`
      Event.deleteOne({ _id: args.id }).exec()
      return removeEvent
    } else return `The Event ${args.eventName} don't found`
  },
  deleteAllEvent: async (root, args) => {
    await Event.deleteMany({}).exec()
    return 'All events were eliminated'
  },
  addSegmentToEvent: async (root, { segmentID, eventID }) => {
    let event
    let segment
    try {
      event = await Event.findOne({ _id: eventID })
      segment = await Segment.findOne({ _id: segmentID })
      if (!event | !segment) throw new Error('El club o el segmento no se encontró')
      event.segments = event.segments.concat(segment)
      event.save()
    } catch (error) {
      errorHandler(error)
    }
    return event
  }

}
