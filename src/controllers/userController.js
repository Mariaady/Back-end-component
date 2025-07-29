const { getUserInfo, doLogin, createUserInfo, modifyUser, addBooking, removeBooking } = require("../services/userService")
const generateToken = require("../utils/authToken")


exports.getUserController= async (req, res) => {
    const userId = req.params.id
    const resUserInfo = await getUserInfo(userId)
    res.status(200).send({ user: resUserInfo })
}

exports.loginUserController = async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password
        const resUserInfo = await doLogin(username, password)
        if(!resUserInfo) throw new Error('El usuario no existe')
        
        const payload = {
            id: resUserInfo.id,
            name: resUserInfo.name,
            role: resUserInfo.role || 'user'
        }

        const token = generateToken(payload,false)
        const token_refresh = generateToken(payload, true)
        res.status(200).send({ user: resUserInfo, token, token_refresh })
    } catch (error) {
        res.status(500).send({ error: error.message})
    }
}

exports.createUserController = async (req, res)  => {
    const newUser = req.body.newUser

    const resUserInfo = await createUserInfo(newUser)

    res.status(200).send({ user: resUserInfo })
}

exports.modifyUserController = async(req, res) => {
    const editedUser = req.body.user
    const resUserInfo = await modifyUser(editedUser)
    res.status(200).send({ user: resUserInfo})
}

exports.addBookingController = async(req, res) => {
    const { userId, placeId } = req.body

    const resUserInfo = await addBooking(userId, placeId)
    res.status(200).send({ user: resUserInfo})
}

exports.removeBookingController = async (req, res) => {
    try {
        const { userId, placeId } = req.body
        const resUserInfo = await removeBooking(userId, placeId)
        res.status(200).send({ user: resUserInfo})
    } catch (error) {
        res.sendStatus(500).send({ error: error.message})
    }
}