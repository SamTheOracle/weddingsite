const mongodb = require('mongodb')

module.exports = class DatabaseService {
  constructor (dbUrl, dbName) {
    this.dbName = dbName
    this.dbUrl = dbUrl
    this.mongoConnection = new mongodb.MongoClient(dbUrl, { useUnifiedTopology: true }).connect()
  }

  async deleteData (collectionName, filter) {
    try {
      const collection = (await this.mongoConnection).db(this.dbName).collection(collectionName)
      return new Promise((resolve, reject) => {
        collection.deleteOne(filter).then(result => resolve(result)).catch(err => reject(err))
      })
    } catch (err) {
      Promise.reject(err)
    }
  }

  async insertData (collectionName, data) {
    try {
      const collection = (await this.mongoConnection).db(this.dbName).collection(collectionName)
      const document = data
      return new Promise((resolve, reject) => {
        collection.insertOne(document).then(onfulfilled => resolve(document), onrejected => reject(onrejected))
      })
    } catch (err) {
      return Promise.reject(err)
    }
  }

  async findData (collectionName, filter, many = false) {
    try {
      const collection = (await this.mongoConnection).db(this.dbName).collection(collectionName)
      if (many) {
        return new Promise((resolve, reject) => {
          collection.find(filter).toArray().then(onfulfilled => {
            if (onfulfilled && onfulfilled.length > 0) {
              resolve(onfulfilled)
            } else {
              resolve([])
            }
          }, onrejected => reject(onrejected))
        })
      } else {
        return new Promise((resolve, reject) => {
          collection.find(filter).toArray().then(onfulfilled => {
            if (onfulfilled && onfulfilled.length > 0) {
              resolve(onfulfilled)
            } else {
              resolve(null)
            }
          }, onrejected => reject(onrejected))
        })
      }
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
