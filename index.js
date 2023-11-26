//requiring dotenv
require('dotenv').config()

//requiring express
const express = require('express')

//Initializing app variable
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Importing router for places
app.use('/places', require('./controllers/places'))

//Creating first route
app.get('/', function (req, res) {
    res.render('home')
})

//Creating second route
app.get('*', function (req, res){
    res.render('error404')
})

//This is just to make sure the server is running
console.log('I am awake')

//Setting the server to listen on the port set on my .env file
app.listen(process.env.PORT)