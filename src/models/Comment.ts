import { Schema, model, Document } from "mongoose";

export interface IComment extends Document {
  body: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

const CommentSchema = new Schema({
  body: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default model<IComment>("Comment", CommentSchema);
