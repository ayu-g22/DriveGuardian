const express = require("express");
const router = express.Router();
const { loginUser,registerUser,getDrivers,addDrivers, deleteDriver } = require("../controllers/user-controller");
// const validateToken = require("../middlewares/validateTokenHandler");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/get-drivers", getDrivers);

router.post("/add-drivers", addDrivers);

router.delete("/delete-drivers", deleteDriver);

module.exports = router;