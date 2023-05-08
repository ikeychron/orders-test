import customFetch from "../adapters/api";

class OrderPort {
  getOrders() {
    return customFetch("http://localhost:3000/orders");
  }
}

export default new OrderPort();
