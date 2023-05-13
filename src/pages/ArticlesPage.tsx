import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import userArticles from "../hooks/useArticles";
import PageLayout from "../components/Layout/PageLayout";

const headData = ["ID", "Name", "Price (without tax)"];

const ArticlesPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { articles } = userArticles();

  return (
    <PageLayout title={t("articles")}>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headData.map((head, i) => (
              <th scope="col" className="px-6 py-3" key={i}>
                {t(head)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {articles?.map((art) => (
            <tr
              onClick={() => navigate(`/article/${art.id}`)}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-200 cursor-pointer"
              key={art.id}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {art.id}
              </th>
              <td className="px-6 py-4">{art.name}</td>
              <td className="px-6 py-4">{art.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        type="button"
        onClick={() => navigate("/new-article")}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {t("newArticle")}
      </button>
    </PageLayout>
  );
};

export default ArticlesPage;
