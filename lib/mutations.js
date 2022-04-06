const cyclistMutations = require('./mutations/cyclistMutations')
const segmentMutations = require('./mutations/segmentMutations')
const rankingMutations = require('./mutations/rankingMutations')
const eventMutations = require('./mutations/eventMutations')
const clubMutations = require('./mutations/clubMutations')

const mutation = {
  ...cyclistMutations,
  ...segmentMutations,
  ...clubMutations,
  ...eventMutations,
  ...rankingMutations
}

module.exports = mutation
