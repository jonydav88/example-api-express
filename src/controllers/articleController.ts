import { Request, Response } from "express";
import Article, { IArticle } from "../models/Article";

import {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../services/articleService";

export async function getAll(req: Request, res: Response) {
  try {
    const articles = await getArticles();
    console.log(articles);
    res.json(articles);
  } catch (error) {
    res.status(500).json({ status: 500, message: "error.message" });
  }
}

export async function getById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const article = await getArticleById(id);
    console.log(article);
    res.json(article);
  } catch (error) {
    res.status(500).json({ status: 500, message: "error.message" });
  }
}

export async function postArticle(req: Request, res: Response) {
  try {
    const { title, body, author } = req.body;
    const newArticle: IArticle = new Article({ title, body, author });
    await createArticle(newArticle);
    res.json(newArticle);
  } catch (error) {
    res.status(500).json({ status: 500, message: "error.message" });
  }
}

export async function putArticle(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const article = await updateArticle(id, req.body);
    console.log(article);
    res.json(article);
  } catch (error) {
    res.status(500).json({ status: 500, message: "error.message" });
  }
}

export async function removeArticle(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const article = await deleteArticle(id);
    console.log(article);
    res.json(article);
  } catch (error) {
    res.status(500).json({ status: 500, message: "error.message" });
  }
}
