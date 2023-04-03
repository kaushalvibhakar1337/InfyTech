import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";
import "./Cart.scss";

const Cart = ({ closeCart }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const products = useSelector((state) => state.cart.products);
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const dispatch = useDispatch();

  const stripePromise = loadStripe(
    "pk_test_51MoLLYSFvhYDcU3mBTG1lC4WewLICocYpuD0sk68BDMmkZEwbuq4zUYSog2mW2rqVu37dAOrnWW0NtvMUCNt6tDx00ySYApFd7"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="blurWrapper" onClick={closeCart}></div>
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
                  src={process.env.REACT_APP_UPLOAD_URL + item.img}
                  alt=""
                ></img>
                <div className="info">
                  <p className="company">{item.company}</p>
                  <p className="name">{item.name}</p>
                  <p className="price">
                    {item.quantity} X ₹ - {item.price}
                  </p>
                  <p
                    className="del"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    REMOVE
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout">
            <span className="note">
              Shipping & taxes calculated at checkout
            </span>
            <button type="button" className="sub" onClick={handlePayment}>
              <span>CHECKOUT • ₹ ${totalPrice()}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
