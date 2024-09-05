const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const regiterUser = asyncHandler(async (req, res) => {
  console.log('body :',req.body);
  const {
    name,
    email,
    password,
    phoneNumber,
    isVehicleRegistered,
    vehicleNumber,
    dlNumber,
  } = req.body;

  const userAvailable = await User.findOne({
    $or: [{ email }, { phoneNumber }],
  });

  if (userAvailable) {
    res.status(400);
    res.json({ msg: "User Already Available" });
  }

  // Hash Password using bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    phoneNumber,
    password: hashedPassword,
    isVehicleRegistered,
    vehicleNumber,
    dlNumber,
  });

  if (user) {
    res.status(201).json({ msg: "User created Successfully" , user : user });
  } else {
    res.status(400);
    res.json({msg : "Failed to create a new User"});
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { phoneNumber, otpOrPassword } = req.body;
  const user = await User.findOne({ phoneNumber });
  if (!user){
    res.status(400).json({ msg : "User Not Registered" , newUser : true});
  }
  // Compare the password with th user password in the database
  const pass = otpOrPassword;
  if (user && (await bcrypt.compare(pass, user.password))) {
    res.status(200).json({ ok : true });
  } else {
    res.status(401);
    res.json({ msg : "Phone Number or Password icorrect"});
  }
});

module.exports = { regiterUser, loginUser };
