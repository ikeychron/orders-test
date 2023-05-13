import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useOrders from "../hooks/useOrders";
import PageLayout from "../components/Layout/PageLayout";

const headData = ["ID", "Price (without tax)", "Price total (with tax)"];

const OrdersPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { orders } = useOrders();

  return (
    <PageLayout title={t("orders")}>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headData.map((head, i) => (
              <th scope="col" className="px-6 py-3" key={i}>
                {t(head)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr
              onClick={() => navigate(`/order/${order.id}`)}
              className="bg-white border-b dark:bg-slate-600 dark:border-gray-700 hover:bg-blue-200 cursor-pointer"
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

      <button
        type="button"
        onClick={() => navigate("/new-order")}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {t("newOrder")}
      </button>
    </PageLayout>
  );
};

export default OrdersPage;
