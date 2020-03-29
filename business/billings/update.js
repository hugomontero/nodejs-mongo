const COLLECTION = "invoice"
const update = database => async (userdata, {id, bill}) => {

    if(!Object.keys(bill).length){
        throw { reason: 1, message: "Invalid Payload"}
    }
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
            bill.amount += detail.amount
            bill.tax += detail.tax
            detail.total_amount = detail.amount + detail.tax
        })
    }
    bill.total_amount = bill.amount + bill.tax

    return database.collection(COLLECTION).insertOne(bill)

}

module.exports = database=>{
    return {update: update(database)}
}
