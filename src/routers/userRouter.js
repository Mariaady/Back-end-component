const express = require('express')
const { getUserController, loginUserController, createUserController } = require('../controllers/userController')

const router = express.Router()

router.get('/:id', getUserController)
router.post('/', loginUserController)
router.post('/register', createUserController)

module.exports = router