const errorHandler = require('../errorHandler')
const Cyclist = require('../datasources/models/cyclist')
const { v1 } = require('uuid')
const uuid = v1

module.exports = {
  createCyclist: async (root, args) => {
    let cyclist
    const newCyclist = new Cyclist({ ...args, id: uuid })
    try {
      await newCyclist.save()
      cyclist = await Cyclist.findOne({ _id: newCyclist.id })
    } catch (error) {
      errorHandler(error)
    }
    return cyclist
  },
  updateCyclist: async (root, { id, input }) => {
    let cyclist
    try {
      await Cyclist.updateOne({ _id: id }, { $set: input }) /* información que se manda para modificar */
      cyclist = await Cyclist.findOne({ _id: id })
    } catch (error) {
      errorHandler(error)
    }
    return cyclist
  },
  deleteCyclist: async (root, { id }) => {
    const cyclist = await Cyclist.findOne({ _id: id })
    if (cyclist != null) {
      const cyclistName = cyclist.cyclistName
      const removeSegment = `The Cyclist ${cyclistName} was removed`
      Cyclist.deleteOne({ _id: id }).exec()
      return removeSegment
    } else return 'The Cyclist don\'t found'
  },
  deleteAllCyclist: async (root, args) => {
    const cyclistCount = await Cyclist.collection.countDocuments()
    if (cyclistCount === 0) {
      return 'There aren\'t cyclists in the database'
    } else {
      await Cyclist.deleteMany({}).exec()
      return 'All cyclists were eliminated'
    }
  }
}
