// context.js
import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { IArticle, IOrder } from "../interfaces/order";

interface IContextOrder {
  orders: IOrder[];
  articles: IArticle[];
  setOrders: Dispatch<SetStateAction<IOrder[]>>;
  setArticles: Dispatch<SetStateAction<IArticle[]>>;
}

export const ContextOrder = createContext<IContextOrder>({} as IContextOrder);

const ProviderOrder = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [articles, setArticles] = useState<IArticle[]>([]);

  return (
    <ContextOrder.Provider
      value={{
        orders,
        articles,
        setOrders,
        setArticles,
      }}
    >
      {children}
    </ContextOrder.Provider>
  );
};

export default ProviderOrder;
