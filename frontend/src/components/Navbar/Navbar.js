import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import { UserAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Navbar.scss";

function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const closeCart = () => setOpenCart(false);
  const { user } = UserAuth();
  const products = useSelector((state) => state.cart.products);
  const navigate = useNavigate();

  const notify = () =>
    toast.warning("LOGIN TO USE CART!", {
      className: "toastify",
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      onClick: () => {
        navigate("/login");
      },
    });

  return (
    <>
      <div className="navbar">
        <ul className="items">
          <li className="item">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="item dropdown">
            <NavLink to="/products/all">
              SHOP <span>+</span>
            </NavLink>
            <div className="dropdown_content">
              <span>PC Components</span>
              <NavLink to="/products/1">Processor</NavLink>
              <NavLink to="/products/2">Motherboard</NavLink>
              <NavLink to="/products/3">Graphics Card</NavLink>
              <NavLink to="/products/4">Power Supply Units</NavLink>
              <NavLink to="/products/5">PC Cabinets</NavLink>
              <NavLink to="/products/6">RAM</NavLink>
              <NavLink to="/products/7">SSD</NavLink>
              <span>Peripherals</span>
              <NavLink to="/products/8">Mouse</NavLink>
              <NavLink to="/products/9">Keyboard</NavLink>
              <NavLink to="/products/10">Headphones</NavLink>
              <NavLink to="/products/11">Mousepad</NavLink>
              <NavLink to="/products/12">Monitors</NavLink>
            </div>
          </li>
          <li className="item">
            <NavLink to="/contact-us">CONTACT US</NavLink>
          </li>
        </ul>
        <NavLink to="/" className="logo">
          INFYTECH
        </NavLink>
        <ul className="items">
          <li className="item dropdown">
            <NavLink to="/login">ACCOUNT</NavLink>
          </li>
          <li className="item">
            <NavLink to="/search">SEARCH</NavLink>
          </li>
          <li className="item cartMenu">
            <span
              className="cart"
              onClick={() => {
                if (user) {
                  setOpenCart(true);
                } else {
                  notify();
                }
              }}
            >
              CART (<span className="cartItems">{products.length}</span>)
            </span>
          </li>
        </ul>
      </div>
      {openCart && <Cart closeCart={closeCart} />}
    </>
  );
}

export default Navbar;
