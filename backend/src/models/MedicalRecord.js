import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  description: String,
  files: [String]
}, { timestamps: true });

export default mongoose.model("MedicalRecord", recordSchema);
