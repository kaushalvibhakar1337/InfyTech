import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import "./Cart.scss";

const Cart = ({ closeCart }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const products = useSelector((state) => state.cart.products);

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
            {products?.map((item) => (
              <div className="item" key={item.id}>
                <img
                  src={require(`../../assets/home/${item.img1}`)}
                  alt=""
                ></img>
                <div className="info">
                  <p className="company">{item.company}</p>
                  <p className="name">{item.name}</p>
                  <p className="price">{item.price}</p>
                  <p className="del">REMOVE</p>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout">
            <span className="note">
              Shipping & taxes calculated at checkout
            </span>
            <button type="button" className="sub">
              <span>CHECKOUT . ₹ 1999.00</span>
            </button>
          </div>
        </div>
      </div>
    </>,
    document.querySelector(".cartPortal")
  );
};

export default Cart;
