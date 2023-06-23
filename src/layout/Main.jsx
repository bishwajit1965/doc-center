import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import Header from "../pages/shared/header/Header";

const Main = () => {
  const location = useLocation();
  const excludeHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("sign-up");
  return (
    <div>
      {excludeHeaderFooter || <Header />}
      <Outlet />
      {excludeHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
