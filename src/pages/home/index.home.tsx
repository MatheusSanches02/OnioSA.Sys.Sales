import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <header className="w-full bg-red-600 h-full"></header>
    </>
  );
}
