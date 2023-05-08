import Orders from "../pages/OrdersPage";
import Articles from "../pages/ArticlesPage";
import ArticlePage from "../pages/ArticlePage";

const router = [
  {
    path: "/",
    Component: Articles,
  },
  {
    path: "/orders",
    Component: Orders,
  },
  {
    path: "new-article",
    element: <ArticlePage />,
  },
  {
    path: "article/:id",
    element: <ArticlePage isEdit />,
  },
];

export default router;
