import mongoose from "mongoose";

const BagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Bags = mongoose.models.Bags || mongoose.model("Bags", BagSchema);

export default Bags;
