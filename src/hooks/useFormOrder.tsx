import { useState, ChangeEvent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IOrder } from "../interfaces/order";
import useArticles from "./useArticles";
import useOrders from "./useOrders";
import { validateNumber } from "../utils/regexp";

const useFormOrder = ({ isEdit }: { isEdit: boolean }) => {
  const [dataForm, setDataForm] = useState<IOrder>({
    id: "",
    name: "",
    articles: [],
    price: 0,
    total: 0,
  });
  const { orders, createOrder, updateOrder, getOrderById } = useOrders();
  const { articles, getArticleById } = useArticles();
  const { id } = useParams();

  useEffect(() => {
    if (isEdit && id !== undefined && orders.length > 0) {
      // Get order
      const order = getOrderById(id);
      if (order !== undefined) setDataForm(order);
    }
  }, [id, orders, isEdit]);

  useEffect(() => {
    calcPrices();
  }, [dataForm.articles]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDataForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const calcPrices = () => {
    let newPrice = 0;
    let newTotal = 0;

    for (let i = 0; i < dataForm.articles.length; i++) {
      const art = dataForm.articles[i];

      newPrice += art.price * art.quantity;
      newTotal += (art.price + art.tax) * art.quantity;
    }

    setDataForm((prev) => ({ ...prev, price: newPrice, total: newTotal }));
  };

  const handleChangeArticle =
    (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      // Validate value
      if (validateNumber(value) || value === "" || value === "0") {
        // Set article in state
        const articleSelected = getArticleById(id);
        if (articleSelected !== undefined) {
          const newArticles = dataForm.articles.filter((art) => art.id !== id);
          const newArticleOrder = {
            ...articleSelected,
            quantity: Number(value),
          };

          if (value === "" || Number(value) < 1) {
            // Delete article of state if value is invalid
            setDataForm((prev) => ({
              ...prev,
              articles: newArticles,
            }));
          } else {
            setDataForm((prev) => ({
              ...prev,
              articles: [...newArticles, newArticleOrder],
            }));
          }
        }
      }
    };

  const onSubmitForm = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const funcArticle = isEdit ? updateOrder : createOrder;
    funcArticle(dataForm);
  };

  return {
    dataForm,
    articles,
    handleChange,
    handleChangeArticle,
    onSubmitForm,
  };
};

export default useFormOrder;
