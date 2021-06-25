import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

export default User;
