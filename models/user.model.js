import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: false,
  },
  telephone: {
    type: String,
    required: false,
  },
});

const User =
  mongoose.models.tranzactUsers || mongoose.model("tranzactUsers", UserSchema);
export default User;
