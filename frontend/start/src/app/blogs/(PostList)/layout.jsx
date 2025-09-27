import { Suspense } from "react";
import { Spinner, SpinnerLoader } from "@/ui/Spinner";
import CategoryList from "@/components/blog/CategoryList";
import Header from "@/components/Header";

function Bloglayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <h1>لیست بلاگ ها</h1>
        <div className="grid grid-cols-12 gap-8 mt-5">
          <div className="col-span-12 lg:col-span-4 xl:col-span-3 text-appsecondary-500 space-y-4">
            <Suspense fallback={<SpinnerLoader />}>
              <CategoryList />
            </Suspense>
          </div>
          <div className="col-span-12 lg:col-span-8 xl:col-span-9">
            <Suspense fallback={<SpinnerLoader />}>
              {children}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bloglayout;
