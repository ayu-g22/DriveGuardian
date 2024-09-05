const asyncHandler = require("express-async-handler");
const User = require("../models/dashboard-model");
const mongoose = require("mongoose");

const getChallan = asyncHandler(async (req, res) => {
    const userId = req.body.userId;
    
    try {
        // Convert the string ID to an ObjectId
        const objectId = new mongoose.Types.ObjectId(userId);

        // Fetch the user using the `userId` field in the document, not `_id`
        const user = await User.find({ userId: objectId });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ok : true , data : user});
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = { getChallan };
