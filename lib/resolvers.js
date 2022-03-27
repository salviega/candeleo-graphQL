const Ranking = require('./datasources/models/ranking')
const { v1 } = require('uuid')
const uuid = v1

// const types = require('./types')

module.exports = {
  Query: {
    rankingCount: () => Ranking.collection.countDocuments(),
    allRanking: async (root, args) => {
      return  Ranking.find({})
    },
    findRanking: async (root, args) => {
      const { date } = args
      return  Ranking.findOne({date})
    }
  },
  Ranking: {
    following: (root) => {
        return {
            name: root.name,
            segment: (root) => {
                return {
                    name: root.name,
                    cyclist: (root) => {
                        return {
                            position: root.position,
                            name: root.name,
                            time: root.time,
                            difference: root.difference,
                            PR: root.PR,
                            speed: root.speed,
                        }
                    } 
                }
            } 
        }
    },
    rode: (root) => {
        return {
            name: root.name,
            segment: (root) => {
                return {
                    name: root.name,
                    cyclist: (root) => {
                        return {
                            position: root.position,
                            name: root.name,
                            time: root.time,
                            difference: root.difference,
                            PR: root.PR,
                            speed: root.speed,
                        }
                    } 
                }
            } 
        }
    },
    club: (root) => {
        return {
            name: root.name,
            segment: (root) => {
                return {
                    name: root.name,
                    cyclist: (root) => {
                        return {
                            position: root.position,
                            name: root.name,
                            time: root.time,
                            difference: root.difference,
                            PR: root.PR,
                            speed: root.speed,
                        }
                    } 
                }
            } 
        }
    },
    event: (root) => {
        return {
            name: root.name,
            segment: (root) => {
                return {
                    name: root.name,
                    cyclist: (root) => {
                        return {
                            position: root.position,
                            name: root.name,
                            time: root.time,
                            difference: root.difference,
                            PR: root.PR,
                            speed: root.speed,
                        }
                    } 
                }
            } 
        }
    }
  },
  Mutation: {
    addRanking: async (root, args) => {
      const ranking = new Ranking({ ...args, id: uuid })
      return ranking.save()
    },
    deleteRanking: async (root, args) => {
        let ranking = await Ranking.findOne({date: args.date})
        if (ranking != null) {
            const rankingDate = ranking.date
            removeranking = `The Cyclist ${rankingDate} was removed`
            Ranking.deleteOne({date: args.date}).exec()
            return removeranking
        } else return `The Cyclist ${args.date} don't found`
    }
  }
}
