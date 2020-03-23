module.exports = (server, options) =>  {
    return {
        get: server.get('/', require('../events/get')(options.databaseConnection)),
        create: server.post('/', require('../events/get')),
        update: server.put('/', require('../events/get'))
    }
}
