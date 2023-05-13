import { useTranslation } from "react-i18next";
import PageLayout from "../components/Layout/PageLayout";
import FormLabel from "../components/Molecules/FormLabel";
import Input from "../components/Atoms/Input";
import Button from "../components/Atoms/Button";
import useFormArticle from "../hooks/useFormArticle";

interface IArticlePage {
  isEdit?: boolean;
}

const ArticlePage = ({ isEdit = false }: IArticlePage) => {
  const { t } = useTranslation();
  const { dataForm, handleChange, onSubmitForm } = useFormArticle({ isEdit });

  return (
    <PageLayout title={t(isEdit ? "Show and edit article" : "New article")}>
      <form className="mt-6" onSubmit={onSubmitForm}>
        <div className="grid md:grid-cols-2 md:gap-6 mb-6">
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
          <FormLabel htmlFor="description" label={t("Description")}>
            <Input
              type="text"
              name="description"
              id="description"
              placeholder=" "
              value={dataForm.description}
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
              onChange={handleChange}
              required
            />
          </FormLabel>
          <FormLabel htmlFor="tax" label={t("Tax")}>
            <Input
              type="number"
              step="any"
              name="tax"
              id="tax"
              placeholder=" "
              value={dataForm.tax}
              onChange={handleChange}
              required
            />
          </FormLabel>
        </div>

        <Button type="submit">
          {t(isEdit ? "Edit article" : "Create article")}
        </Button>
      </form>
    </PageLayout>
  );
};

export default ArticlePage;
