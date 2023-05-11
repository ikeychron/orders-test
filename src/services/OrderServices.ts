import OrderPort from "../ports/OrderPort";
import { IOrder } from "../interfaces/order";

class OrderService {
  private orderPort: typeof OrderPort;

  constructor(orderPort: typeof OrderPort) {
    this.orderPort = orderPort;
  }

  async getOrders(): Promise<IOrder[]> {
    return await this.orderPort.getOrders();
  }
  async createOrder(order: IOrder): Promise<IOrder[]> {
    return await this.orderPort.createOrder(order);
  }
  async updateOrder(order: IOrder): Promise<IOrder[]> {
    return await this.orderPort.updateOrder(order);
  }
}

const orderService = new OrderService(OrderPort);

export default orderService;
