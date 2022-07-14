import { Schema, model, Document } from "mongoose";

export interface IArticle extends Document {
  title: string;
  body: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

const ArticleSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default model<IArticle>("Article", ArticleSchema);
