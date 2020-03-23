const routes = require("./routes")

module.exports = async (server, {databaseConnection, log}) => {
    let options = {
        databaseConnection,
        log
    }
    return routes(server, options)
}
