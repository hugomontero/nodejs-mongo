const express = require("express")
const app = express()
require('./config/routes')(app)


app.listen(3000, ()=>{
    console.log('server listening in port 3000')
})

