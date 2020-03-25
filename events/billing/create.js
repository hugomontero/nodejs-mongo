const service = require('../../business/billings/create')

module.exports = options => async (req, res)=>{
    let userData = {user_id: req.headers.userid || "user_id_default"}
    try{
        let data_base = await options.databaseConnection._database()
        console.log(data_base)
        let response = await service(data_base).create(userData, req.body)
        res.send(response)
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }


}
