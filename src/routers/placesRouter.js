const express = require('express')
const { getAllPlacesController, getPlaceByIdController } = require('../controllers/placesController')

const router = express.Router()

router.get('/', getAllPlacesController)
router.get('/detail/:id', getPlaceByIdController)

module.exports = router