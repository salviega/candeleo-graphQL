const moogose = require('mongoose')

const schema = new moogose.Schema({
  segmentName: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  cyclistName: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  difference: {
    type: String,
    required: true
  },
  PR: {
    type: String,
    required: true
  },
  speed: {
    type: String,
    required: true
  }
})

module.exports = moogose.model('Segment', schema)
// export default mongoose.model('Cyclist', schema)
