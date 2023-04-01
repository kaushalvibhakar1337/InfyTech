import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Navbar.scss";

function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const closeCart = () => setOpenCart(false);

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
              <NavLink to="/products/8">Processor</NavLink>
              <NavLink to="/products/9">Motherboard</NavLink>
              <NavLink to="/products/3">Graphics Card</NavLink>
              <NavLink to="/products/4">Power Supply Units</NavLink>
              <NavLink to="/products/5">PC Cabinets</NavLink>
              <NavLink to="/products/6">RAM</NavLink>
              <NavLink to="/products/7">SSD</NavLink>
              <span>Peripherals</span>
              <NavLink to="/products/1">Mouse</NavLink>
              <NavLink to="/products/2">Keyboard</NavLink>
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
          <li className="item cart">
            <NavLink onClick={() => setOpenCart(true)}>
              CART (<span className="cartItems">0</span>)
            </NavLink>
          </li>
        </ul>
      </div>
      {openCart && <Cart closeCart={closeCart} />}
    </>
  );
}

export default Navbar;
