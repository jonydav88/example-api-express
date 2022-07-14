import { getArticleById } from "../../services/articleService";
import Article from "../../models/Article";
import { mockedArticle } from "../mocks/articleMocked";

describe("Tests GET BY ID articleService", () => {
  const getById = jest.spyOn(Article, "findOne");

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("test should throws an exception", async () => {
    getById.mockImplementation(() => {
      throw new Error("findOne failed");
    });

    await expect(getArticleById).rejects.toThrow();
  });

  test("test should returns an article", async () => {
    getById.mockResolvedValue(mockedArticle);

    const result = await getArticleById("1");

    expect(result).toBe(mockedArticle);
  });
});
