import express from "express";
import articleRoutes from "./routes/articleRoute";
import commentRoutes from "./routes/commentRoute";
import mongoose from "mongoose";

class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    //connection mongodb atlas
    const mongodb_atlas =
      "mongodb+srv://jony:example-api-db@cluster0.vlzenoz.mongodb.net/test";
    //mongoose.set("useFindAndModify", true);
    mongoose
      .connect(mongodb_atlas || process.env.MONGODB_URL, {})
      .then(() => {
        console.log("Connected to database");
      })
      .catch((error) => {
        console.log(`Error connecting to the database. \n${error}`);
      });
    //Settings
    this.app.set("port", process.env.PORT || 3000);
    //Middlewares
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.app.use("/api/articles", articleRoutes);
    this.app.use("/api/comments", commentRoutes);
  }

  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server on port:", this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
