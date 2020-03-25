require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const mongoConnection = require("./config/mongoConnection")
const app = express()

app.use(bodyParser.urlencoded({extended: false}));
require("./config/routesFactory")(app, {databaseConnection:mongoConnection, log:{}})

app.listen(3000, ()=>{
    console.log('server listening in port 3000')
})

