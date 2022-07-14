import { deleteArticle } from "../../services/articleService";
import Article from "../../models/Article";
import { mockedArticle } from "../mocks/articleMocked";

describe("Tests DELETE articleService", () => {
  const deleteById = jest.spyOn(Article, "findOneAndRemove");

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("test should throws an exception", async () => {
    deleteById.mockImplementation(() => {
      throw new Error("remove failed");
    });

    await expect(deleteArticle).rejects.toThrow();
  });

  test("test should returns an article", async () => {
    deleteById.mockResolvedValue(mockedArticle);

    const result = await deleteArticle("1");

    expect(result).toBe(mockedArticle);
  });
});
