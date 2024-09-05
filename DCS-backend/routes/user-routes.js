const express = require("express");
const router = express.Router();
const { loginUser,regiterUser } = require("../controllers/user-controller");
// const validateToken = require("../middlewares/validateTokenHandler");

router.post("/register", regiterUser);

router.post("/login", loginUser);

module.exports = router;