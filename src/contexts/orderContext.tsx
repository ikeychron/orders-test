// context.js
import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { IArticle, IOrder } from "../interfaces/order";

interface IContextOrder {
  orders: IOrder[];
  articles: IArticle[];
  themeMode: "light" | "dark";
  setOrders: Dispatch<SetStateAction<IOrder[]>>;
  setArticles: Dispatch<SetStateAction<IArticle[]>>;
  toggleTheme: () => void;
}

export const ContextOrder = createContext<IContextOrder>({} as IContextOrder);

const ProviderOrder = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [themeMode, setThemeMode] =
    useState<IContextOrder["themeMode"]>("light");

  /* Theme */
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setThemeMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setThemeMode("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  console.log(themeMode);
  const toggleTheme = () => {
    console.log("click");
    if (themeMode === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setThemeMode("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setThemeMode("dark");
    }
  };

  return (
    <ContextOrder.Provider
      value={{
        orders,
        articles,
        themeMode,
        setOrders,
        setArticles,
        toggleTheme,
      }}
    >
      {children}
    </ContextOrder.Provider>
  );
};

export default ProviderOrder;
