import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/Home/Home";
import AllProducts from "./modules/AllProducts/AllProducts";
import Products from "./modules/Products/Products";
import ProductDetails from "./modules/ProductDetails/ProductDetails";
import Login from "./modules/Login/Login";
import Register from "./modules/Register/Register";
import Contact from "./modules/Contact/Contact";
import About from "./modules/About/About";
import PrivacyPolicy from "./modules/PrivacyPolicy/PrivacyPolicy";
import RefundPolicy from "./modules/RefundPolicy/RefundPolicy";
import TermsOfService from "./modules/TermsOfService/TermsOfService";
import Error from "./modules/Error/Error";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};
export default App;
