module.exports  =  options => {
    return {
        billings:{
            get: {
                "/": require('../events/billing/get')(options.databaseConnection),
                ":id": require('../events/billing/get-by-id')(options.databaseConnection),
            },
            post:{
                "/": require('../events/billing/create')(options.databaseConnection)
            },
            put:{
                "/": require('../events/billing/update')(options.databaseConnection)
            },
            delete:{
                "/": require('../events/billing/delete')(options.databaseConnection)
            }
        },
        payments:{
            get: require('../events/billing/get')(options.databaseConnection)
        }
    }



}
