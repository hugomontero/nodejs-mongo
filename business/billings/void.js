const COLLECTION = "invoice"
const VOID_STATUS = "void"
const ObjectId = require("mongodb").ObjectID

const voidBilling = database => async (userData, bill) => {
 if (!Object.keys(bill).length) {
  throw { reason: 1, message: "Invalid Payload" }
 }
 console.log("my userData", userData)
 bill.status = VOID_STATUS
 bill.updated_at = new Date()
 bill.updated_by = userData.user_id
 console.log("my bill", bill)
 return database.collection(COLLECTION).updateOne({ _id: new ObjectId(bill._id) }, { $set: bill })
}

module.exports = database => {
 return { voidBilling: voidBilling(database) }
}
