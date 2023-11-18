//Creating controller
const router = require('express').Router()

//Creating first route in places
router.get('/', function (req, res){
    res.send('GET /places')
})

module.exports = router


