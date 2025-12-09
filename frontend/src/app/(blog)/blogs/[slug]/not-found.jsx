"use client";
import useMoveBack from "@/hooks/useMoveBack";
function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold text-appsecondary-700 mb-8">
              صفحه ای که دنبالش بودید، پیدا نشد
            </h1>
            <button
               onClick={moveBack}
              className="flex bg-appprimary-900 items-center text-white  p-3 rounded-md gap-x-2"
            >
              <span> برگشت</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
