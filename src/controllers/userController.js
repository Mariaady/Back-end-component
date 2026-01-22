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
    const payload = {
      id: user._id.toString(),
      name: user.name,
      role: user.role,
    };
    const token = generateToken(payload, false);
    const refreshToken = generateToken(payload, true);
    res.status(200).json({ user, token, refreshToken });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

exports.createUserController = async (req, res) => {
  try {
    const newUser = req.body;
    const user = await userService.createUserInfo(newUser);
    const payload = {
      id: user._id.toString(),
      name: user.name,
      role: user.role,
    };
    const token = generateToken(payload, false);
    const refreshToken = generateToken(payload, true);
    res.status(200).json({ user, token, refreshToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.modifyUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const editedUser = req.body;
    editedUser.id = id;
    const resUserInfo = await userService.modifyUser(editedUser);
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
