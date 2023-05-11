import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextOrder } from "../contexts/orderContext";
import orderServices from "../services/OrderServices";
import { IOrder } from "../interfaces/order";
import uuidv4 from "../utils/uuid";

const useOrders = () => {
  const navigate = useNavigate();
  const { orders, setOrders } = useContext(ContextOrder);

  const getOrders = async () => {
    try {
      const data = await orderServices.getOrders();
      setOrders(data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getOrderById = (id: string) => {
    const order = orders.find((ord) => String(ord.id) === String(id));
    return order;
  };

  const addOrders = (orders: IOrder[]) => {
    setOrders(orders);
  };

  const createOrder = async (order: Omit<IOrder, "id">) => {
    const newOrder = { ...order, id: uuidv4() };

    try {
      await orderServices.createOrder(newOrder);
      getOrders();
      navigate("/orders");
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const updateOrder = async (order: IOrder) => {
    try {
      await orderServices.updateOrder(order);
      const indexOrder = orders.findIndex((ord) => ord.id === order.id);

      const copyOrders = [...orders];
      copyOrders.splice(indexOrder, 1, order);
      setOrders(copyOrders);
      navigate("/orders");
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  return {
    orders,
    getOrders,
    getOrderById,
    addOrders,
    createOrder,
    updateOrder,
  };
};

export default useOrders;
