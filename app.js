// Point d'entrer de l'application node js qui peut être aussi index.js ou main.js
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req,res) => res.send('Hello, Express 2'))

app.listen(port, () => console.log('Notre application nodejs est démarrée sur : http://localhost:'+port))