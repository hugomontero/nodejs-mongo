const service = require('../../business/billings/getById')

module.exports = options => async (req, res)=>{
    let userData = {user_id: req.headers.userid || "user_id_default"}
    try{
        let data_base = await options.databaseConnection._database()
        let response = await service(data_base).getById(userData, req.params.id)
        res.send(response)
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }

}
