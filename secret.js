const crypto = require('crypto')

const secret = 'PawTrip Company'
const secret2 = 'Token Pawtrip actualizado con más seguridad'

const hash = crypto.createHmac('sha256',secret).update(secret2).digest("hex");

console.log(hash)