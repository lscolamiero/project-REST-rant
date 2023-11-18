//requirung dotenv
require('dotenv').config()

//requiring express
const express = require('express')

//Initializing app variable
const app = express()

//Importing router for places
app.use('/places', require('./controllers/places'))

//Creating first route
app.get('/', function (req, res) {
    res.send('Hello World!')
})

//Creating second route
app.get('*', function (req, res){
    res.status(404).send('<h1>404 Page</h1>')
})

//This is just to make sure the server is running
console.log('I am awake')

//Setting the server to listen on the port set on my .env file
app.listen(process.env.PORT)