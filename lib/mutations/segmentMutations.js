const errorHandler = require('../errorHandler')
const Segment = require('../datasources/models/segment')
const Cyclist = require('../datasources/models/cyclist')
const { v1 } = require('uuid')
const uuid = v1

module.exports = {
  createSegment: async (root, args) => {
    let segment
    const newSegment = new Segment({ ...args, id: uuid })
    try {
      await newSegment.save()
      segment = await Segment.findOne({ _id: newSegment.id })
    } catch (error) {
      errorHandler(error)
    }
    return segment
  },
  updateSegment: async (root, { id, input }) => {
    let segment
    try {
      await Segment.updateOne({ _id: id }, { $set: input }) /* información que se manda para modificar */
      segment = await Segment.findOne({ _id: id })
    } catch (error) {
      errorHandler(error)
    }
    return segment
  },
  deleteSegment: async (root, { id }) => {
    const segment = await Segment.findOne({ _id: id })
    if (segment != null) {
      const segmentName = segment.segmentName
      removeSegment = `The segment ${segmentName} was removed`
      Segment.deleteOne({ _id: id }).exec()
      return removeSegment
    } else return 'The Segment don\'t found'
  },
  deleteAllSegment: async (root, args) => {
    const segmentCount = await Segment.collection.countDocuments()
    if (segmentCount == 0) {
      return 'There aren\'t segments in the database'
    } else {
      await Segment.deleteMany({}).exec()
      return 'All segments were eliminated'
    }
  },
  addCyclist: async (root, { segmentID, cyclistID }) => {
    let segment
    let cyclist
    try {
      segment = await Segment.findOne({ _id: segmentID })
      cyclist = await Cyclist.findOne({ _id: cyclistID })
      if (!segment | !cyclist) throw new Error('El ciclista o el segmento no se encontró')
      segment.cyclists = segment.cyclists.concat(cyclist)
      segment.save()
    } catch (error) {
      errorHandler(error)
    }
    return segment
  }
}
