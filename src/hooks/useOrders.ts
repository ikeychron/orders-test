import { useContext, useCallback } from "react";
import { ContextOrder } from "../contexts/orderContext";
import orderService from "../services/OrderServices";
import { IOrder } from "../interfaces/order";

const useOrders = () => {
  const { orders, setOrders } = useContext(ContextOrder);

  const getOrders = async () => {
    try {
      const data = await orderService.getOrders();
      setOrders(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const addOrders = (orders: IOrder[]) => {
    setOrders(orders);
  };

  const createOrder = (order: IOrder) => {
    setOrders([...orders, order]);
  };

  const updateOrder = (order: IOrder) => {
    const newOrders = orders.filter((ord) => ord.id === order.id);
    setOrders([...newOrders, order]);
  };

  return { orders, getOrders, addOrders, createOrder, updateOrder };
};

export default useOrders;
