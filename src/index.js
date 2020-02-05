const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const http = require('http')
const { setupWebsocket } = require('./websocket')


const app = express()
const server = http.Server(app)
setupWebsocket(server)

mongoose.connect(`mongodb+srv://omnistack:semanaomni@cluster0-8w5ax.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(cors())
app.use(express.json())

/* Tipos de parâmetros:
  Query params: req.query (Filtros, ordenação, paginação)
  Route params: req.params (Identificar recurso na alteração ou remoção)
  Body: req.body (Dados para criação ou alteração de um registro)
*/

app.use(routes)


server.listen(3333)