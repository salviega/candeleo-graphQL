const moogose = require('mongoose')

const schema = new moogose.Schema({
  date: {
    type: String,
    required: true
  },
  following: {
    type: String,
    required: true
  },
  rode: {
    type: String,
    required: true
  },
  club: {
    type: String,
    required: true
  },
  event: {
    type: String,
    required: false
  }
})

module.exports = moogose.model('Ranking', schema)
// export default mongoose.model('Cyclist', schema)
