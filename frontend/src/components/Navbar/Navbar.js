import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Navbar.scss";

function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  return (
    <>
      <div className="navbar">
        <ul className="items">
          <li className="item">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="item dropdown">
            <NavLink to="/products">
              SHOP <span>+</span>
            </NavLink>
            <div className="dropdown_content">
              <span>PC Components</span>
              <NavLink to="/products/processors">Processor</NavLink>
              <NavLink to="/products/motherboards">Motherboard</NavLink>
              <NavLink to="/products/gpus">Graphics Card</NavLink>
              <NavLink to="/products/psus">Power Supply Units</NavLink>
              <NavLink to="/products/cabinets">PC Cabinets</NavLink>
              <NavLink to="/products/rams">RAM</NavLink>
              <NavLink to="/products/ssds">SSD</NavLink>
              <span>Peripherals</span>
              <NavLink to="/products/mice">Mouse</NavLink>
              <NavLink to="/products/keyboards">Keyboard</NavLink>
              <NavLink to="/products/headphones">Headphones</NavLink>
              <NavLink to="/products/mousepads">Mousepad</NavLink>
              <NavLink to="/products/monitors">Monitors</NavLink>
            </div>
          </li>
          <li className="item">
            <NavLink to="/contact">CONTACT US</NavLink>
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
            <NavLink onClick={() => setOpenCart(!openCart)}>
              CART (<span className="cartItems">0</span>)
            </NavLink>
          </li>
        </ul>
      </div>
      {openCart && <Cart />}
    </>
  );
}

export default Navbar;
