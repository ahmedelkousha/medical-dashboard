import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: Number,
  status: { type: String, enum: ["pending","paid","failed"], default: "pending" }
}, { timestamps: true });

export default mongoose.model("Payment", paymentSchema);
