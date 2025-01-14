import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    displayName: { type: String, require: true },
    age: { type: Number, require: true },
  },
  { timestamps: true }
);

export const users = mongoose.model("users", schema);
