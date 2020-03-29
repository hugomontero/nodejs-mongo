const service = require("../../business/billings/get")

module.exports = options => async (req, res) => {
 try {
  let query = JSON.parse(req.query.f)
  let database = await options.databaseConnection._database()
  let pagination = {
   page: req.query.page || 1,
   size: req.query.size || 10,
  }
  let response = await service(database).get(query, pagination)
  res.send(response)
 } catch (error) {
  console.log(error)
  res.send(500)
 }
}
