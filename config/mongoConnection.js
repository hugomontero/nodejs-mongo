const MongoConnection = require("../libs/MongoConnection")
module.exports = new MongoConnection(process.env.MONGO_SERVER_NAME, process.env.MONGO_USERNAME, process.env.MONGO_PASSWORD, process.env.MONGO_DATABASE, process.env.MONGO_OPTIONS)
