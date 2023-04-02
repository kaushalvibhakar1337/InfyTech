import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./ProductDetails.scss";
import { NavLink, useParams } from "react-router-dom";

const ProductDetails = () => {
  const productId = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img1");
  const [quantity, setQuantity] = useState(1);
  const { data, loading, error } = useFetch(
    `/products/${productId}?populate=*`
  );

  return (
    <>
      <Navbar />
      <div className="productDetails">
        {error ? (
          "Something went wrong!"
        ) : loading ? (
          "Loading..."
        ) : (
          <>
            <div className="left">
              <div className="images">
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes?.img1?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img1")}
                />
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes?.img2?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img2")}
                />
              </div>
              <div className="mainImg">
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes[selectedImg]?.data?.attributes?.url
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <div className="wrapper">
                <p className="company">COMPANY</p>
                <p className="name">PRODUCT</p>
                <p className="price">R 249.00</p>
                <p className="shippingPolicy">
                  Tax included.{" "}
                  <NavLink to="/return-policy">Shipping calculated</NavLink> at
                  checkout.
                </p>
                <hr />
                <div className="quantity">
                  <button
                    className="minus"
                    onClick={() =>
                      setQuantity((val) => (val === 1 ? 1 : val - 1))
                    }
                  >
                    -
                  </button>
                  <p className="total">{quantity}</p>
                  <button
                    className="plus"
                    onClick={() => setQuantity((val) => val + 1)}
                  >
                    +
                  </button>
                </div>
                <button className="addToCart">ADD TO CART</button>
                <button className="buyNow">BUY IT NOW</button>
                <div className="description">Description</div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
