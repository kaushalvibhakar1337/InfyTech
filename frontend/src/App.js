import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./modules/Home/Home";
import AllProducts from "./modules/Products/AllProducts";
import Products from "./modules/Products/Products";
import ProductDetails from "./modules/ProductDetails/ProductDetails";
import Login from "./modules/Account/Login";
import Register from "./modules/Account/Register";
import Profile from "./modules/Profile/Profile";
import About from "./modules/About/About";
import Contact from "./modules/Contact/Contact";
import TermsNConditions from "./modules/Policies/TermsNConditions";
import PrivacyPolicy from "./modules/Policies/PrivacyPolicy";
import ReturnPolicy from "./modules/Policies/ReturnPolicy";
import Error from "./modules/Error/Error";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/all" element={<AllProducts />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<TermsNConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
};
export default App;
