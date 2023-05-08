import OrderPort from "../ports/OrderPort";
import { IOrder, IArticle } from "../interfaces/order";

class OrderService {
  private orderPort: typeof OrderPort;

  constructor(orderPort: typeof OrderPort) {
    this.orderPort = orderPort;
  }

  async getOrders(): Promise<IOrder[]> {
    return await this.orderPort.getOrders();
  }
  async getArticles(): Promise<IArticle[]> {
    return await this.orderPort.getArticles();
  }
}

const orderService = new OrderService(OrderPort);

export default orderService;
