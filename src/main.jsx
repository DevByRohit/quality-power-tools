import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import AboutUs from "./Components/About Us/AboutUs.jsx";
import ProductPage from "./Components/Product Page/ProductPage.jsx";
import Home from "./Components/Home/Home.jsx";
import SingleProductPage from "./Components/Single Product Page/SingleProductPage.jsx";
import ProductDetailPage from "./Components/Product Details Page/ProductDetailPage.jsx";
import { QuickViewProvider } from "./Context/QuickViewContext.jsx";
import TermsConditions from "./Components/Terms Conditions/TermsConditions.jsx";
import PrivacyPolicy from "./Components/Terms Conditions/PrivacyPolicy.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="terms-conditions" element={<TermsConditions />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />

      {/* Product listing */}
      <Route path="product" element={<ProductPage />} />

      {/* Product category */}
      <Route path="product/:category" element={<SingleProductPage />} />

      <Route
        path="product/:category/:productSlug"
        element={<ProductDetailPage />}
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuickViewProvider>
      <RouterProvider router={router} />
    </QuickViewProvider>
  </React.StrictMode>
);
