const COLLECTION = "invoice"
const ObjectId = require("mongodb").ObjectID
const getById = database => async (userdata, id) => {
 return database.collection(COLLECTION).findOne({ _id: new ObjectId(id) })
}

module.exports = database => {
 return { getById: getById(database) }
}
