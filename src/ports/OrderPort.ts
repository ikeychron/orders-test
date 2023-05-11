import customFetch from "../adapters/api";
import { IOrder } from "../interfaces/order";

class OrderPort {
  getOrders() {
    return customFetch("http://localhost:3000/orders");
  }
  createOrder(order: IOrder) {
    return customFetch("http://localhost:3000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
  }
  updateOrder(order: IOrder) {
    return customFetch(`http://localhost:3000/orders/${order.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
  }
}

export default new OrderPort();
