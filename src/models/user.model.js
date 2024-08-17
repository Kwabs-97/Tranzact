import mongoose from "mongoose";

const tranzactSchema = new mongoose.Schema({
  username: {
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
});

const User =
  mongoose.models.Tranzact || mongoose.model("Tranzact", tranzactSchema);
export default User;
