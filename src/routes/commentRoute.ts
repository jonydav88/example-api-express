import { Router } from "express";
import {
  getAll,
  getById,
  postComment,
  putComment,
  removeComment,
} from "../controllers/commentController";

class Comment {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get("/", getAll);
    this.router.get("/:id", getById);
    this.router.post("/", postComment);
    this.router.put("/:id", putComment);
    this.router.delete("/:id", removeComment);
  }
}

const comment = new Comment();
export default comment.router;
