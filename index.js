require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('*', function (req, res){
    res.status(404).send('<h1>404 Page</h1>')
})

console.log('I am awake')
app.listen(process.env.PORT)