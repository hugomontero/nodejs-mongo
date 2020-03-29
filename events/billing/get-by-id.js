const service = require("../../business/billings/getById")

module.exports = options => async (req, res) => {
 let userData = { user_id: req.headers.userid || "user_id_default" }
 try {
  let database = await options.databaseConnection._database()
  let response = await service(database).getById(userData, req.params.id)
  res.send(response)
 } catch (error) {
  console.log(error)
  res.sendStatus(500)
 }
}
