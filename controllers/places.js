//Creating controller
const router = require('express').Router()

//Creating first route in places
//GET /places
router.get('/', function (req, res){
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai-rest.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-place.jpg'
      }]      
    res.render('places/index', {places})
})

module.exports = router


