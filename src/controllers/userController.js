const userService = require("../services/userService");
const generateToken = require("../utils/authToken");

exports.getAllUsersController = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

exports.getUserInfoController = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await userService.getUserInfo(userId);
    if (!user) {
      return res.status(404).send("El usuario no existe");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

exports.doLoginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userService.doLogin(username, password);
    const payload = { id: user._id.toString() };
    const token = generateToken(payload);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUserController = async (req, res) => {
  try {
    const newUser = req.body;
    const resUserInfo = await userService.createUserInfo(newUser);
    res.status(200).send({ user: resUserInfo });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.modifyUserController = async (req, res) => {
  try {
    const editedUser = req.body;
    const resUserInfo = await userService.modifyUser(editedUser.user);
    res.status(200).send({ user: resUserInfo });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.addBookingController = async (req, res) => {
  try {
    const { userId, placeId } = req.body;

    const resUserInfo = await userService.addBooking(userId, placeId);
    res.status(200).send({ user: resUserInfo });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.removeBookingController = async (req, res) => {
  try {
    const { userId, placeId } = req.body;
    const resUserInfo = await userService.removeBooking(userId, placeId);
    res.status(200).send({ user: resUserInfo });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
