const errorHandler = require('./errorHandler')
const Cyclist = require('./datasources/models/cyclist')
const Segment = require('./datasources/models/segment')
const Club = require('./datasources/models/club')
const Event = require('./datasources/models/event')
const type = {
  Segment: {
    cyclists: async ({ cyclists }) => {
      const cyclistsData = []
      let ids
      try {
        ids = cyclists ? cyclists.map(id => id) : []
        ids.length > 0
          ? await ids.forEach(id => {
              x = Cyclist.findOne({ _id: { $in: id } })
              cyclistsData.push(x)
            })
          : []
        // buscar en todos los estudiantes que recibimos en el campo de que tipo es
      } catch (error) {
        errorHandler(error)
      }
      return cyclistsData
    }
  },
  Club: {
    segments: async ({ segments }) => {
      const segmentData = []
      let ids
      try {
        ids = segments ? segments.map(id => id) : []
        ids.length > 0
          ? await ids.forEach(id => {
              x = Segment.findOne({ _id: { $in: id } })
              segmentData.push(x)
            })
          : []
        // buscar en todos los estudiantes que recibimos en el campo de que tipo es
      } catch (error) {
        errorHandler(error)
      }
      return segmentData
    }
  },
  Event: {
    segments: async ({ segments }) => {
      const segmentData = []
      let ids
      try {
        ids = segments ? segments.map(id => id) : []
        ids.length > 0
          ? await ids.forEach(id => {
              x = Segment.findOne({ _id: { $in: id } })
              segmentData.push(x)
            })
          : []
        // buscar en todos los estudiantes que recibimos en el campo de que tipo es
      } catch (error) {
        errorHandler(error)
      }
      return segmentData
    }
  },
  Ranking: {
    following: async ({ following }) => {
      const segmentData = []
      let ids
      try {
        ids = following ? following.map(id => id) : []
        ids.length > 0
          ? await ids.forEach(id => {
              x = Segment.findOne({ _id: { $in: id } })
              segmentData.push(x)
            })
          : []
        // buscar en todos los estudiantes que recibimos en el campo de que tipo es
      } catch (error) {
        errorHandler(error)
      }
      return segmentData
    },
    rode: async ({ rode }) => {
      const segmentData = []
      let ids
      try {
        ids = rode ? rode.map(id => id) : []
        ids.length > 0
          ? await ids.forEach(id => {
              x = Segment.findOne({ _id: { $in: id } })
              segmentData.push(x)
            })
          : []
        // buscar en todos los estudiantes que recibimos en el campo de que tipo es
      } catch (error) {
        errorHandler(error)
      }
      return segmentData
    },
    clubes: async ({ clubes }) => {
      const segmentData = []
      let ids
      try {
        ids = clubes ? clubes.map(id => id) : []
        ids.length > 0
          ? await ids.forEach(id => {
              x = Club.findOne({ _id: { $in: id } })
              segmentData.push(x)
            })
          : []
        // buscar en todos los estudiantes que recibimos en el campo de que tipo es
      } catch (error) {
        errorHandler(error)
      }
      return segmentData
    },
    events: async ({ events }) => {
      const segmentData = []
      let ids
      try {
        ids = events ? events.map(id => id) : []
        ids.length > 0
          ? await ids.forEach(id => {
              x = Event.findOne({ _id: { $in: id } })
              segmentData.push(x)
            })
          : []
        // buscar en todos los estudiantes que recibimos en el campo de que tipo es
      } catch (error) {
        errorHandler(error)
      }
      return segmentData
    }

  }
}

module.exports = type
