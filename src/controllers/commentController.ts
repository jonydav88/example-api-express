import { Request, Response } from "express";
import Comment, { IComment } from "../models/Comment";

import {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
  getCommentsByArticleId,
} from "../services/commentService";

export async function getAll(req: Request, res: Response) {
  try {
    const comments = await getComments();
    console.log(comments);
    res.json(comments);
  } catch (error) {
    res.status(500).json({ status: 500, message: "error.message" });
  }
}

export async function getAllByArticleId(req: Request, res: Response) {
  try {
    const { articleId } = req.params;
    const comments = await getCommentsByArticleId(articleId);
    console.log(comments);
    res.json(comments);
  } catch (error) {
    res.status(500).json({ status: 500, message: "error.message" });
  }
}

export async function getById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const comment = await getCommentById(id);
    console.log(comment);
    res.json(comment);
  } catch (error) {
    res.status(500).json({ status: 500, message: "error.message" });
  }
}

export async function postComment(req: Request, res: Response) {
  try {
    const { body, author, articleId } = req.body;
    const newComment: IComment = new Comment({
      body,
      author,
      articleId,
    });
    await createComment(newComment);
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ status: 500, message: "error.message" });
  }
}

export async function putComment(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const Comment = await updateComment(id, req.body);
    console.log(Comment);
    res.json(Comment);
  } catch (error) {
    res.status(500).json({ status: 500, message: "error.message" });
  }
}

export async function removeComment(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const Comment = await deleteComment(id);
    console.log(Comment);
    res.json(Comment);
  } catch (error) {
    res.status(500).json({ status: 500, message: "error.message" });
  }
}
