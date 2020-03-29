module.exports = options => {
 return {
  billings: {
   get: {
    "/": require("../events/billing/get")(options),
    ":id": require("../events/billing/get-by-id")(options),
   },
   post: {
    "/": require("../events/billing/create")(options),
   },
   delete: {
    "/": require("../events/billing/delete")(options),
   },
  },
 }
}
