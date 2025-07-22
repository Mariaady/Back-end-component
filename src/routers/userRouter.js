const express = require('express')
const { getUserController, loginUserController, createUserController, modifyUserController, addBookingController } = require('../controllers/userController')

const router = express.Router()

router.get('/:id', getUserController)
router.post('/', loginUserController)
router.post('/register', createUserController)
router.post('/modify/:id', modifyUserController)
router.put('/addBooking', addBookingController)

module.exports = router