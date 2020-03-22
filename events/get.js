const getBillings = async ({filters, pagination}) => {
    return {data:[]}
}



module.exports = async (req, res)=>{
    let filters = req.query.filter
    if(filters){
        filters = JSON.parse(filters)
    }

}
