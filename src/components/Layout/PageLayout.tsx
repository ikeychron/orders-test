import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IPageLayout {
  children: ReactNode;
  title: string;
  link: string;
  linkTitle: string;
}

const PageLayout = ({ children, title, link, linkTitle }: IPageLayout) => {
  return (
    <div className="max-w-3xl mx-auto my-10">
      <div className="w-full flex justify-between">
        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <Link to={link} className="underline">
          {linkTitle}
        </Link>
      </div>
      <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="relative overflow-x-auto">{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
