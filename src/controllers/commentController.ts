import { Request, Response } from "express";
import Comment, { IComment } from "../models/Comment";

import {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
} from "../services/commentService";

export async function getAll(req: Request, res: Response) {
  try {
    const Comments = await getComments();
    console.log(Comments);
    res.json(Comments);
  } catch (error) {
    res.status(500).json({ status: 500, message: "error.message" });
  }
}

export async function getById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const Comment = await getCommentById(id);
    console.log(Comment);
    res.json(Comment);
  } catch (error) {
    res.status(500).json({ status: 500, message: "error.message" });
  }
}

export async function postComment(req: Request, res: Response) {
  try {
    const { title, body, author } = req.body;
    const newComment: IComment = new Comment({ title, body, author });
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
