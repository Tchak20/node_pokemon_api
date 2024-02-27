// Point d'entrer de l'application node js qui peut être aussi index.js ou main.js
const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
let pokemons = require('./mock-pokemon')

const app = express()
const port = 3000

app
//.use(favicon(__filename + '/favicon.ico'))
.use(morgan('dev'))

app.get('/', (req,res) => res.send('Hello, Express 2'))

app.get('/api/pokemons/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    res.json(pokemon)
})

app.get('/api/pokemons', (req,res) => {
    res.send('Vous avez demandé le pokemon n '+pokemons.length)
})

app.listen(port, () => console.log('Notre application nodejs est démarrée sur : http://localhost:'+port))