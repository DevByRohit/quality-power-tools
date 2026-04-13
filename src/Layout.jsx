import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import FooterBottom from "./Components/Footer Bottom/FooterBottom";
import QuickViewModal from "./Components/Quick View Modal/QuickViewModal";
import ScrollToTop from "./Components/Scroll To Top/ScrollToTop";
import FloatingSocial from "./Components/Floating Social Media/FloatingSocial";

const Layout = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <QuickViewModal></QuickViewModal>
      <FloatingSocial></FloatingSocial>
      <Footer></Footer>
      <FooterBottom></FooterBottom>
    </>
  );
};

export default Layout;
