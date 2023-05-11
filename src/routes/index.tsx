import Orders from "../pages/OrdersPage";
import Articles from "../pages/ArticlesPage";
import ArticlePage from "../pages/ArticlePage";
import OrderPage from "../pages/OrderPage";

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
  {
    path: "new-order",
    element: <OrderPage />,
  },
  {
    path: "order/:id",
    element: <OrderPage isEdit />,
  },
];

export default router;
