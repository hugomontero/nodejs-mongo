const create = database => async (userdata, bill) => {
    console.log("my bill not modified", bill)
    bill.created_at = new Date()
    bill.expiration_date = new Date()
    bill.updated_at = new Date()
    bill.created_by = userdata.user_id
    bill.updated_by = userdata.user_id
    bill.amount = 0
    bill.tax = 0
    bill.total_amount = 0
    if(bill.details && Array.isArray(bill.details)) {
        bill.details.forEach(detail=>{
            bill,amount += detail.amount
            bill.tax += detail.tax
            detail.total_amount = detail.amount + detail.tax
        })
    }
    console.log("my previous bill", bill)
    return database.collection("invoice").insertOne(bill)

}

module.exports = database=>{
    return {create: create(database)}
}
