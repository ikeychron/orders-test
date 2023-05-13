import { ReactNode } from "react";
import Navbar from "../Organisms/Navbar";

interface IPageLayout {
  children: ReactNode;
  title: string;
}

const PageLayout = ({ children, title }: IPageLayout) => {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800">
      <Navbar />
      <div className="max-w-3xl mx-auto my-10">
        <div className="w-full flex justify-between">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </div>
        <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-slate-600 dark:border-gray-700">
          <div className="relative overflow-x-auto">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default PageLayout;
