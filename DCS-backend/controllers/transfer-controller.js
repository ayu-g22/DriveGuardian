const asyncHandler = require("express-async-handler");
const TransferControl = require("../models/transfer-model");
const User = require("../models/userModel");
const mongoose = require("mongoose");

const transferControl = asyncHandler(async (req, res) => {
    const { shiftedFrom , shiftedTo } = req.body;
    console.log('body :',req.body)
    const ObjectId = new mongoose.Types.ObjectId(shiftedFrom);
    console.log('objectId :', ObjectId);
    const user = await User.findById({_id: ObjectId});

    if(!user){
        return res.status(404).json({msg : "Invalid User"});
    }

    console.log('user :',user);
    const vehicleNumber = user.vehicleNumber;

    const config = await TransferControl.create({
        shiftedFrom,
        shiftedTo,
        vehicleNumber: vehicleNumber
      });

      if (config) {
        res.status(201).json({ msg: "Transfered Added", ok: true });
      } else {
        res.status(400).json({ msg: "Failed to Transfer Control" });
      }
});


module.exports = { transferControl };
