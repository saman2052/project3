const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signUpSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String },
  lastname: { type: String },
  date: { type: Date, default: Date.now }
});

const Signup = mongoose.model("Signup", signUpSchema);

module.exports = Signup;