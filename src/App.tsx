import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// Routes
import router from "./routes";
// Context
import useOrders from "./hooks/useOrders";
import useArticles from "./hooks/useArticles";

function App() {
  const { getOrders } = useOrders();
  const { getArticles } = useArticles();

  useEffect(() => {
    getOrders();
    getArticles();
  }, []);

  return (
    <Routes>
      {router.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          Component={route.Component}
          element={route.element}
        />
      ))}
    </Routes>
  );
}

export default App;

