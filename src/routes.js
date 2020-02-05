const { Router } = require('express')
const DevController = require('./Controllers/DevController')
const SearchControler = require('./Controllers/SearchController')


const routes = Router()

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store )

routes.get('/search', SearchControler.index)


module.exports = routes