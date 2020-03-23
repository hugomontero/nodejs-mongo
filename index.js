const express = require("express")
const mongoConnection = require("./config/mongoConnection")
const app = express()

require("./config/routesFactory")(app, {databaseConnection:mongoConnection})

app.listen(3000, ()=>{
    console.log('server listening in port 3000')
})

