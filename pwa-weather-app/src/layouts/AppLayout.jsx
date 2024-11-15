import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="container mt-4 main-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default AppLayout;
