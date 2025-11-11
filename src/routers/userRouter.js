const express = require("express");
const {
  getAllUsersController,
  getUserInfoController,
  doLoginController,
  createUserController,
  modifyUserController,
  addBookingController,
  removeBookingController,
} = require("../controllers/userController");
const { verifyToken } = require("../middlewares/auth");

const router = express.Router();

router.get("/getUser", verifyToken, (req, res) => {
  res.status(200).json({ user: req.payload });
});
router.get("/", getAllUsersController);
router.get("/:id", getUserInfoController);
router.post("/login", doLoginController);
router.post("/register", createUserController);
router.patch("/modify/:id", modifyUserController);
router.put("/addBooking", addBookingController);
router.put("/removeBooking", removeBookingController);

module.exports = router;
