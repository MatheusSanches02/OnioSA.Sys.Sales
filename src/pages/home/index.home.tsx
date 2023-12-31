import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HomeHeader } from "../../components/index.components";

// import { useTranslation } from "react-i18next";

export default function Home() {
  // const { t } = useTranslation();

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <HomeHeader />
      <main className="bg-secondary-background w-full h-full">
        <Outlet />
      </main>
    </>
  );
}
