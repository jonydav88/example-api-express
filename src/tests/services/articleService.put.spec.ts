import { updateArticle } from "../../services/articleService";
import Article, { IArticle } from "../../models/Article";
import { mockedArticle } from "../mocks/articleMocked";

describe("Tests PUT articleService", () => {
  const put = jest.spyOn(Article, "findOneAndUpdate");
  //const getById = jest.spyOn(Article, "find");

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("test should throws an exception", async () => {
    put.mockImplementation(() => {
      throw new Error("put failed");
    });

    await expect(updateArticle).rejects.toThrow();
  });

  test("test should update an article", async () => {
    put.mockResolvedValue(mockedArticle);
    const updatedArticle: IArticle = new Article({
      body: "bb-modified",
    });

    const result = await updateArticle("1", updatedArticle);

    expect(result.body).toBe("bb-modified");
  });
});
