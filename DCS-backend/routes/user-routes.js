const express = require("express");
const router = express.Router();
const { loginUser,registerUser,getDrivers,addDrivers } = require("../controllers/user-controller");
// const validateToken = require("../middlewares/validateTokenHandler");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/get-drivers", getDrivers);

router.post("/add-drivers", addDrivers);

// router.post("/add-drivers", addDrivers);

module.exports = router;