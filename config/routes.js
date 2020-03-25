module.exports  =  options => {
    return {
        billings:{
            get: {
                "/": require('../events/billing/get')(options),
                ":id": require('../events/billing/get-by-id')(options),
            },
            post:{
                "/": require('../events/billing/create')(options)
            },
            put:{
                "/": require('../events/billing/update')(options)
            },
            delete:{
                "/": require('../events/billing/delete')(options)
            }
        },
        payments:{
            get: require('../events/billing/get')(options)
        }
    }



}
