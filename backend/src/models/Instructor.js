const mongoose = require("mongoose");

const InstructorSchema = new mongoose.Schema({
    username: String,
    profile_picture: String,
    whatsapp: String,
    bio: String,
    region: String,
    price: Number,
    days: [String],

})

module.exports = mongoose.model("Instructor", InstructorSchema)