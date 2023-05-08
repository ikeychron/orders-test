import customFetch from "../adapters/api";
import { IArticle } from "../interfaces/order";

class ArticlePort {
  getArticles() {
    return customFetch("http://localhost:3000/articles");
  }
  createArticle(article: IArticle) {
    return customFetch("http://localhost:3000/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(article),
    });
  }
  updateArticle(article: IArticle) {
    return customFetch(`http://localhost:3000/articles/${article.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(article),
    });
  }
}

export default new ArticlePort();
