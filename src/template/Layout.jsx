import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="ps-sm-5 pe-sm-5 ps-3 pe-3">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
