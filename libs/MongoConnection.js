const MongoClient = require("mongodb").MongoClient
const assert = require("assert")
const MONGO_NAME = "mongodb+srv://"

class MongoConnection{
    constructor(serverName, username, password, database, options) {
        this.serverName = serverName
        this.username = username
        this.password = password
        this.database = database
        this.options = options
        this.client = null

    }

    async _connect(){
        const urlConnection = MONGO_NAME.concat(this.username).concat(":").concat(this.password).concat(this.serverName).concat(this.database).concat(this.options)
        const client = new MongoClient(urlConnection, {useNewUrlParser:true})
        this.client = await client.connect()
        return this.client
    }

    async _database(){
        if(!this.client){
            this.client = await this._connect()
        }
        return this.client.db(this.database)
    }

    _close(){
        if(this.client){
            return this.client.close()
        }
        return null
    }
}


module.exports = MongoConnection
