import { Router } from "express";
import {
  getAll,
  getById,
  postArticle,
  putArticle,
  removeArticle,
} from "../controllers/articleController";

class Article {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get("/", getAll);
    this.router.get("/:id", getById);
    this.router.post("/", postArticle);
    this.router.put("/:id", putArticle);
    this.router.delete("/:id", removeArticle);
  }
}

const article = new Article();
export default article.router;
