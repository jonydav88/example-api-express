import { createArticle } from "../../services/articleService";
import Article, { IArticle } from "../../models/Article";
import { mockedArticle } from "../mocks/articleMocked";

describe("Tests POST articleService", () => {
  const post = jest.spyOn(Article.prototype, "save");
  const getById = jest.spyOn(Article, "find");

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("test should throws an exception", async () => {
    post.mockImplementation(() => {
      throw new Error("post failed");
    });

    await expect(createArticle).rejects.toThrow();
  });

  test("test should create an article", async () => {
    post.mockResolvedValue(mockedArticle);
    const newArticle: IArticle = new Article({
      title: "aa",
      body: "bb",
      author: "cc",
    });

    const result = await createArticle(newArticle);

    expect(result.title).toBe("aa");
  });
});
