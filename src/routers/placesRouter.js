const express = require('express')
const { getAllPlacesController } = require('../controllers/placesController')

const router = express.Router()

router.get('/', getAllPlacesController)

module.exports = router