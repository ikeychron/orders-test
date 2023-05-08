import ArticlePort from "../ports/ArticlePort";
import { IArticle } from "../interfaces/order";

class ArticleService {
  private articlePort: typeof ArticlePort;

  constructor(articlePort: typeof ArticlePort) {
    this.articlePort = articlePort;
  }

  async getArticles(): Promise<IArticle[]> {
    return await this.articlePort.getArticles();
  }
  async createArticle(article: IArticle): Promise<IArticle[]> {
    return await this.articlePort.createArticle(article);
  }
  async updateArticle(article: IArticle): Promise<IArticle[]> {
    return await this.articlePort.updateArticle(article);
  }
}

const articleService = new ArticleService(ArticlePort);

export default articleService;
