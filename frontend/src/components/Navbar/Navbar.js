import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
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
            <NavLink to="/products/1">Processor</NavLink>
            <NavLink to="/products/1">Motherboard</NavLink>
            <NavLink to="/products/1">Graphics Card</NavLink>
            <NavLink to="/products/1">Power Supply Units</NavLink>
            <NavLink to="/products/1">PC Cabinets</NavLink>
            <NavLink to="/products/1">RAM</NavLink>
            <NavLink to="/products/1">SSD</NavLink>
            <span>Peripherals</span>
            <NavLink to="/products/1">Mouse</NavLink>
            <NavLink to="/products/1">Keyboard</NavLink>
            <NavLink to="/products/1">Headphones</NavLink>
            <NavLink to="/products/1">Mousepad</NavLink>
            <NavLink to="/products/1">Monitors</NavLink>
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
          <NavLink to="/cart">
            CART (<span className="cartItems">0</span>)
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
