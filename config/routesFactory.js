const routes = require("./routes")
const ROOT_PATH = "/"
module.exports = async (server, {databaseConnection, log}) => {
    let options = {
        databaseConnection,
        log
    }
    await databaseConnection._connect()
    let routesWithOptions = routes(options)

    let routeKeys = Object.keys(routesWithOptions)
    console.log("initializing routings...")
    routeKeys.forEach(rk => {
        const root = routesWithOptions[rk]
        let methods = Object.keys(root)
        methods.forEach(methodName => {
            let method = root[methodName]
            let paths = Object.keys(method)
            paths.forEach(pathName=>{
                let path = method[pathName]
                pathName = pathName === ROOT_PATH ? "" : pathName
                server[methodName](`/${rk}/${pathName}`, path)
            })
        })
    })

}
