//Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

//Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use('/places', require('./controllers/places'))
//ROUTES
app.get('/', function (req, res) {
    res.render('home')
})

app.get('*', function (req, res) {
    res.render('error404')
})

console.log('I am awake')

//Setting the server to listen on the port set on my .env file
app.listen(process.env.PORT)