//Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

//Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use('/places', require('./controllers/places'))
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