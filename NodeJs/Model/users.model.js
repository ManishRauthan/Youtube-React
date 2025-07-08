import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
