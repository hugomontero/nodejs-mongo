/*
    serverless way
 */
require("dotenv").config()

const MongoConnection = require("../../libs/MongoConnection")



const fn = async() =>{
    try{
        let mongoConnection = new MongoConnection(process.env.MONGO_SERVER_NAME, process.env.MONGO_USERNAME, process.env.MONGO_PASSWORD, process.env.MONGO_DATABASE, process.env.MONGO_OPTIONS)
        await mongoConnection._connect()
        let db = await mongoConnection._database()
        const col = db.collection("test")
        const cursor = col.find({welcome:"welcome mongodb"}).limit(2);

        const doc = await cursor.next()
        console.log(JSON.stringify(doc))

        mongoConnection._close()
    }catch(error){
        console.log(error)
    }
}


fn().then(result=>{
    console.log("result")
}).catch(error=>{
    console.log(error)
})


