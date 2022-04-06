const moogose = require('mongoose')

const schema = new moogose.Schema({
  eventName: {
    type: String,
    required: true
  },
  segments: [
    {
      ref: 'Segment',
      type: moogose.Schema.Types.ObjectId
    }
  ]
})

module.exports = moogose.model('Event', schema)
