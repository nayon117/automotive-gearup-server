const { Schema, model } = require("mongoose");


const userSchema = new Schema({
    name: String,
    email: String,
    image: String,
    role: {
        type: String,
        default: "student"
    }
})

const User = model("User", userSchema);
module.exports = User;