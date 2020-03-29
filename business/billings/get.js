const COLLECTION = "invoice"
const ObjectId = require("mongodb").ObjectID

const paginationHelper = pagination => {
 return { limit: pagination.size, skip: (pagination.page - 1) * pagination.size }
}

const get = database => async (query, pagination) => {
 let mongoPage = paginationHelper(pagination)
 try {
  let result = await database
   .collection(COLLECTION)
   .find(query)
   .skip(mongoPage.skip)
   .limit(mongoPage.limit)
   .toArray()
  return result
 } catch (error) {
  console.log(error)
  throw error
 }
}

module.exports = database => {
 return { get: get(database) }
}
