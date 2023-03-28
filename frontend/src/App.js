import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/Home/Home";
import Products from "./modules/Products/Products";
import ProductDetails from "./modules/ProductDetails/ProductDetails";
import Login from "./modules/Login/Login";
import Register from "./modules/Register/Register";
// import Cart from "./modules/Cart/Cart";
import About from "./modules/About/About";
import Contact from "./modules/Contact/Contact";
import Error from "./modules/Error/Error";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};
export default App;
