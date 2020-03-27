const COLLECTION = "invoice"
const ObjectId = require("mongodb").ObjectID
const getById = database => async (userdata, id) => {

    return database.collection(COLLECTION).findOne({_id: new ObjectId("5e7b6969822fb269fd107b46")})

}

module.exports = database=>{
    return {getById: getById(database)}
}
