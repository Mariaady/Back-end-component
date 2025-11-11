const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const { sendWelcomeEmail } = require("../jobsEmail/welcomeEmail");
exports.getAllUsers = async () => {
  try {
    const users = await User.find();
    if (!users || users.length === 0) {
      throw new Error("No hay usuarios registrados");
    }
    return users;
  } catch (error) {
    throw new Error(error.message || "Error al obtener los usuarios");
  }
};
exports.getUserInfo = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error("Usuario no encontrado");
    return user;
  } catch (error) {
    throw new Error(error.message || "Error al obtener el usuario");
  }
};
exports.doLogin = async (username, password) => {
  try {
    const user = await User.findOne({ username }).select("+password");
    if (!user) throw new Error("Usuario no encontrado");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Contraseña incorrecta");
    return user;
  } catch (error) {
    throw new Error(error.message || "Error en el login");
  }
};

exports.createUserInfo = async (newUser) => {
  try {
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    const userAux = {
      ...newUser,
      password: hashedPassword,
      isActive: false,
    };
    const createUser = await User.create(userAux);
    await sendWelcomeEmail(createUser);
    return createUser;
  } catch (error) {
    throw new Error(error.message || "Error creando usuario");
  }
};

exports.modifyUser = async (editedUser) => {
  try {
    if (editedUser.password) {
      editedUser.password = await bcrypt.hash(editedUser.password, 10);
    }
    const updateUser = await User.findByIdAndUpdate(editedUser.id, editedUser, {
      new: true,
      runValidators: true,
    });
    return updateUser;
  } catch (error) {
    throw new Error(error.message || "Error modificando usuario");
  }
};

exports.addBooking = async (userId, placeId) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      userId,
      { $push: { cart: { placeId } } },
      { new: true }
    );
    return updateUser;
  } catch (error) {
    throw new Error(error.message || "Error añadiendo reserva");
  }
};

exports.removeBooking = async (userId, placeId) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      userId,
      { $pull: { cart: { placeId } } },
      { new: true }
    );
    return updateUser;
  } catch (error) {
    throw new Error(error.message || "Error eliminando reserva");
  }
};
