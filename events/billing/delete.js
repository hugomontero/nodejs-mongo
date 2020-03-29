const getService = require("../../business/billings/getById")
const voidService = require("../../business/billings/void")

module.exports = options => async (req, res) => {
 let userData = { user_id: req.headers.userid || "user_id_default" }
 try {
  console.log(userData)
  let database = await options.databaseConnection._database()
  let bill = await getService(database).getById(userData, req.params.id)
  let response = await voidService(database).voidBilling(userData, bill)
  res.send({ message: `the bill with id ${req.params.id} was void ` })
 } catch (error) {
  console.log(error)
  res.sendStatus(500)
 }
}
