import Comment, { IComment } from "../models/Comment";

export async function getComments() {
  try {
    return await Comment.find();
  } catch (error) {
    // Log Errors
    throw Error("Error retrieving Comments");
  }
}

export async function getCommentsByArticleId(article: string) {
  try {
    return await Comment.find({ articleId: article });
  } catch (error) {
    // Log Errors
    throw Error("Error retrieving Comments");
  }
}

export async function getCommentById(id: string) {
  try {
    return await Comment.findOne({ _id: id });
  } catch (error) {
    // Log Errors
    throw Error("Error retrieving Comment");
  }
}

export async function createComment(comment: IComment) {
  try {
    await comment.save();
    return comment;
  } catch (error) {
    // Log Errors
    throw Error("error saving Comment");
  }
}

export async function updateComment(id: string, comment: IComment) {
  try {
    await Comment.findOneAndUpdate({ _id: id }, comment);
    return comment;
  } catch (error) {
    // Log Errors
    throw Error("error updating the Comment");
  }
}

export async function deleteComment(id: string) {
  try {
    return await Comment.findOneAndRemove({ _id: id });
  } catch (error) {
    // Log Errors
    throw Error("error deleting Comment");
  }
}
