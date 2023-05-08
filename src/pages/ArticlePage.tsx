import { useState, ChangeEvent, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../components/Layout/PageLayout";
import useArticles from "../hooks/useArticles";
import { IArticle } from "../interfaces/order";

interface IArticlePage {
  isEdit?: boolean;
}

const ArticlePage = ({ isEdit = false }: IArticlePage) => {
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
    if (id !== undefined && articles.length > 0) {
      // Get article
      const article = getArticleById(id);
      console.log(article);
      if (article !== undefined) setDataForm(article);
    }
  }, [id, articles]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const funcArticle = isEdit ? updateArticle : createArticle;
    funcArticle(dataForm);
  };

  return (
    <PageLayout
      title={isEdit ? "Show and edit article" : "New article"}
      link="/"
      linkTitle="Go to articles page"
    >
      <form className="mt-6" onSubmit={onSubmitForm}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={dataForm.name}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="description"
              id="description"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={dataForm.description}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="description"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              step="any"
              name="price"
              id="price"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={dataForm.price}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="price"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price (Without Tax)
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              step="any"
              name="tax"
              id="tax"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={dataForm.tax}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="tax"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Tax
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 ml-3 mb-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {isEdit ? "Edit" : "Create"} article
        </button>
      </form>
    </PageLayout>
  );
};

export default ArticlePage;
