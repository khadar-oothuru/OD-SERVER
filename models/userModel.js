const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  villageName: { type: String, required: true },
  milkType: { type: String, required: true },
  userType: { type: String, required: true },
  password: { type: String, required: true },
  profilePicture1: { type: String, required: false },
  profilePicture2: { type: String, required: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
