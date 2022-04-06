const moogose = require('mongoose')

const schema = new moogose.Schema({
  date: {
    type: String,
    required: true
  },
  following: [
    {
      ref: 'Segment',
      type: moogose.Schema.Types.ObjectId
    }
  ],
  rode: [
    {
      ref: 'Segment',
      type: moogose.Schema.Types.ObjectId
    }
  ],
  clubes: [
    {
      ref: 'Club',
      type: moogose.Schema.Types.ObjectId
    }
  ],
  events: [
    {
      ref: 'Event',
      type: moogose.Schema.Types.ObjectId
    }
  ]
})

module.exports = moogose.model('Ranking', schema)
