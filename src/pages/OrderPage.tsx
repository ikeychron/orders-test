import { useTranslation } from "react-i18next";
import PageLayout from "../components/Layout/PageLayout";
import Input from "../components/Atoms/Input";
import useFormOrder from "../hooks/useFormOrder";
import FormLabel from "../components/Molecules/FormLabel";
import Button from "../components/Atoms/Button";

const headData = ["ID", "Price total (with tax)"];

interface IOrderPage {
  isEdit?: boolean;
}

const OrderPage = ({ isEdit = false }: IOrderPage) => {
  const { t } = useTranslation();
  const {
    dataForm,
    articles,
    handleChange,
    handleChangeArticle,
    onSubmitForm,
  } = useFormOrder({
    isEdit,
  });

  return (
    <PageLayout title={t(isEdit ? "Show and edit order" : "New order")}>
      <form className="mt-6" onSubmit={onSubmitForm}>
        <div className="w-full mb-6">
          <FormLabel htmlFor="name" label={t("Name")}>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder=" "
              value={dataForm.name}
              onChange={handleChange}
              required
            />
          </FormLabel>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6 mb-6">
          <FormLabel htmlFor="price" label={t("Price (without tax)")}>
            <Input
              type="number"
              step="any"
              name="price"
              id="price"
              placeholder=" "
              value={dataForm.price}
              readOnly
            />
          </FormLabel>
          <FormLabel htmlFor="total" label={t("Price total (with tax)")}>
            <Input
              type="number"
              step="any"
              name="total"
              id="total"
              placeholder=" "
              value={dataForm.total}
              readOnly
            />
          </FormLabel>
        </div>
        <div className="w-full">
          <label className="text-sm text-gray-500 dark:text-gray-400">
            {t("Write the quantity of articles that you will add")}
          </label>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 my-3">
            <thead>
              <tr>
                {headData.map((head, i) => (
                  <th scope="col" className="px-6 py-3" key={i}>
                    {t(head)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {articles?.map((art) => {
                const totalPrice = art.price + art.tax;
                return (
                  <tr
                    className="bg-white border-b dark:bg-slate-600 dark:border-gray-700"
                    key={art.id}
                  >
                    <td className="px-6 py-4">{art.id}</td>
                    <td className="px-6 py-4">{totalPrice}</td>
                    <td className="px-6 py-4">
                      <label
                        htmlFor={art.id}
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {t("Quantity")}
                      </label>
                      <input
                        type="text"
                        id={art.id}
                        name="quantity"
                        value={
                          dataForm.articles.find((item) => item.id === art.id)
                            ?.quantity
                        }
                        onChange={handleChangeArticle(art.id)}
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Button type="submit">
          {t(isEdit ? "Edit order" : "Create order")}
        </Button>
      </form>
    </PageLayout>
  );
};

export default OrderPage;
