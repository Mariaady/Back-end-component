const { getUserInfo } = require("../services/userService")

exports.getUsercontroller= async (req, res) => {
    const userId = req.params.id
    const resUserInfo = await getUserInfo(userId)
    res.status(200).send({ user: resUserInfo })
}