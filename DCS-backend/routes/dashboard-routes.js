const express = require("express");
const router = express.Router();
const { getChallan ,regiterUser } = require("../controllers/dashboard-controller");
// const validateToken = require("../middlewares/validateTokenHandler");

router.get("/challan", getChallan);

module.exports = router;