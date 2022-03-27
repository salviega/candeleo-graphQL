const mongoose = require('mongoose')
const {
  DB_USER,
  DB_PASSWORD,
  DB_CLUSTER,
  DB_COLLECTION
} = process.env
const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.wfaab.mongodb.net/${DB_COLLECTION}?retryWrites=true&w=majority`
mongoose.connect(mongoUrl, {
  useNewUrlParser: true
})
  .then(() => {
    console.log('connected to MongoDB')
  }).catch(error => {
    console.error('error connection to MongoDB', error.message)
  })
