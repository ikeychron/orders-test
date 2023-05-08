import useOrders from "../hooks/useOrders";
import PageLayout from "../components/Layout/PageLayout";

const headData = ["ID", "Price (Without Tax)", "Price Total (With Tax)"];

const OrdersPage = () => {
  const { orders } = useOrders();

  return (
    <PageLayout title="Articles" link="/" linkTitle="Go to articles page">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headData.map((head, i) => (
              <th scope="col" className="px-6 py-3" key={i}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={order.id}
            >
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {order.id}
              </td>
              <td className="px-6 py-4">{order.price}</td>
              <td className="px-6 py-4">{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageLayout>
  );
};

export default OrdersPage;
