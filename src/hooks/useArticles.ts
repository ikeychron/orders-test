import { useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ContextOrder } from "../contexts/orderContext";
import articleServices from "../services/ArticleServices";
import { IArticle } from "../interfaces/order";
import uuidv4 from "../utils/uuid";

const useArticles = () => {
  const navigate = useNavigate();
  const { articles, setArticles } = useContext(ContextOrder);

  const getArticles = useCallback(async () => {
    if (!setArticles) return;
    try {
      const data = await articleServices.getArticles();
      setArticles(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, [setArticles]);

  const getArticleById = (id: string) => {
    // console.log(articles);
    const article = articles.find((art) => art.id === id);
    return article;
  };

  const addArticles = (articles: IArticle[]) => {
    setArticles(articles);
  };

  const createArticle = async (article: Omit<IArticle, "id">) => {
    const newArticle = { ...article, id: uuidv4() };

    try {
      await articleServices.createArticle(newArticle);
      getArticles();
      navigate("/");
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const updateArticle = async (article: IArticle) => {
    try {
      await articleServices.updateArticle(article);
      const indexArticle = articles.findIndex((art) => art.id === article.id);

      const copyArticles = [...articles];
      copyArticles.splice(indexArticle, 1, article);
      setArticles(copyArticles);
      navigate("/");
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
    articles,
    getArticles,
    getArticleById,
    addArticles,
    createArticle,
    updateArticle,
  };
};

export default useArticles;
