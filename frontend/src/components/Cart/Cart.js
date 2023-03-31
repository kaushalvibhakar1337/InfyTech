import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Cart.scss";

const Cart = ({ closeCart }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className="blur" onClick={closeCart}></div>
      <div className="myCart">
        <div className="container">
          <div className="heading">
            <span>CART</span>
            <button onClick={closeCart}>X</button>
          </div>
          <div className="cartContent">
            <span>YOUR CART IS EMPTY</span>
          </div>
          <div className="checkout">
            <span className="note">
              Shipping & taxes calculated at checkout
            </span>
            <button type="button" className="sub">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>,
    document.querySelector(".cartPortal")
  );
};

export default Cart;
