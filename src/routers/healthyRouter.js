const express = require("express");
const { healthyCheck } = require("../controllers/healthyController");

const router = express.Router();

router.get("/", healthyCheck);

module.exports = router;
