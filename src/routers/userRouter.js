const express = require('express')
const { getUserController } = require('../../../../../AppData/Local/Temp/8fd51ba0-9958-4f16-841a-12ff43a70683_proyectoFinal (1).zip.683/proyectoFinal/backend/src/controllers/userController')

const router = express.Router()

router.get('/:id', getUserController)

module.exports = router