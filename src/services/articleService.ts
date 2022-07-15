import Article, { IArticle } from "../models/Article";

export async function getArticles() {
  try {
    return await Article.find();
  } catch (error) {
    // Log Errors
    throw Error("Error retrieving articles");
  }
}

export async function getArticleById(id: string) {
  try {
    return await Article.findOne({ _id: id });
  } catch (error) {
    // Log Errors
    throw Error("Error retrieving article");
  }
}

export async function createArticle(article: IArticle) {
  try {
    await article.save();
    return article;
  } catch (error) {
    // Log Errors
    throw Error("error saving article");
  }
}

export async function updateArticle(id: string, article: IArticle) {
  try {
    article.updatedAt = new Date();
    await Article.findOneAndUpdate({ _id: id }, article);
    return article;
  } catch (error) {
    // Log Errors
    throw Error("error updating the article");
  }
}

export async function deleteArticle(id: string) {
  try {
    return await Article.findOneAndRemove({ _id: id });
  } catch (error) {
    // Log Errors
    throw Error("error deleting article");
  }
}
