module.exports = server =>  {return {
    get: server.get('/', require('../events/get')),
    create: server.post('/', require('../events/get')),
    update: server.put('/', require('../events/get'))
}}
