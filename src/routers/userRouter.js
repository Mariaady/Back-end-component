const express = require("express");
const {
  getUserController,
  loginUserController,
  createUserController,
  modifyUserController,
  addBookingController,
  removeBookingController,
} = require("../controllers/userController");

const router = express.Router();

router.get("/:id", getUserController);
router.post("/", loginUserController);
router.post("/register", createUserController);
router.post("/modify/:id", modifyUserController);
router.put("/addBooking", addBookingController);
router.put("/removeBooking", removeBookingController);

module.exports = router;
