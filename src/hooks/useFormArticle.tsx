import { useState, ChangeEvent, useEffect } from "react";
import { useParams } from "react-router-dom";
import useArticles from "../hooks/useArticles";
import { IArticle } from "../interfaces/order";

const useFormArticle = ({ isEdit }: { isEdit: boolean }) => {
  const [dataForm, setDataForm] = useState<IArticle>({
    id: "",
    name: "",
    description: "",
    price: 0,
    tax: 0,
  });
  const { articles, getArticleById, createArticle, updateArticle } =
    useArticles();
  const { id } = useParams();

  useEffect(() => {
    if (isEdit && id !== undefined && articles.length > 0) {
      // Get article
      const article = getArticleById(id);
      if (article !== undefined) setDataForm(article);
    }
  }, [id, articles, isEdit]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const funcArticle = isEdit ? updateArticle : createArticle;
    funcArticle(dataForm);
  };

  return { dataForm, handleChange, onSubmitForm };
};

export default useFormArticle;
