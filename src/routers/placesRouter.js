const express = require('express')
const { getAllPlacesController, getPlaceByIdController, createPlaceController, deletePlaceController } = require('../controllers/placesController')
const { verifyToken, verifyAdmin } = require('../middlewares/auth')

const router = express.Router()

router.get('/', getAllPlacesController)
router.get('/detail/:id', getPlaceByIdController)
router.post('/create', verifyToken, verifyAdmin, createPlaceController)
router.delete('/delete/:id', verifyToken, verifyAdmin, deletePlaceController)

module.exports = router