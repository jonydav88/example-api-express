import { getArticles } from "../../services/articleService";
import Article from "../../models/Article";
import { mockedArticle } from "../mocks/articleMocked";

describe("Tests GET articleService", () => {
  const get = jest.spyOn(Article, "find");

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("test should throws an exception", async () => {
    get.mockImplementation(() => {
      throw new Error("find failed");
    });

    await expect(getArticles).rejects.toThrow();
  });

  test("test should returns articles", async () => {
    get.mockResolvedValue([mockedArticle, 1]);

    const result = await getArticles();

    expect(result[0]).toBe(mockedArticle);
  });
});
