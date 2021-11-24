const express = require('express')
// import path from 'path'

const routes = require('./routes')

const app = express()

// habilita o server para receber dados via post (form)
app.use(express.urlencoded({ extended: true }))

// definindo as rotas
app.use('/api', routes)

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
