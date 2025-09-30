import { Schema, model } from "mongoose";

const messageSchema = new Schema({
  name: { type: String, required: true, minlength: 2 },
  phone: { type: String, required: true, match: /^(\+375|80)\d{9}$/ },
  message: { type: String, required: true, minlength: 2 },
  createdAt: { type: Date, default: Date.now },
});

export const Message = model("Message", messageSchema);
