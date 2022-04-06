const moogose = require('mongoose')

const schema = new moogose.Schema({
  clubName: {
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

module.exports = moogose.model('Club', schema)
