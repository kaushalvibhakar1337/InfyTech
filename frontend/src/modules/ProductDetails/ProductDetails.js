import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import useFetchData from "../../hooks/useFetchData";
import { addToCart } from "../../redux/cartReducer";
import Navbar from "../../components/Navbar/Navbar";
import RelatedProductList from "../../components/ProductList/RelatedProductList";
import Footer from "../../components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserAuth } from "../../context/AuthContext";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const productId = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img1");
  const [quantity, setQuantity] = useState(1);
  const { data, loading, error } = useFetchData(
    `/products/${productId}?populate=*`
  );
  const dispatch = useDispatch();
  const rel = data?.attributes?.categories?.data[0]?.id;

  const notify1 = () =>
    toast.success("ADDED TO THE CART!", {
      className: "toastify",
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const notify2 = () =>
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
    });

  const { user } = UserAuth();

  return (
    <>
      <Navbar />
      <div className="productDetails">
        <div className="container">
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
                      data?.attributes?.[selectedImg]?.data?.attributes?.url
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="right">
                <div className="wrapper">
                  <p className="company">{data?.attributes?.company}</p>
                  <p className="name">{data?.attributes?.name}</p>
                  <p className="price">
                    ₹ {data?.attributes?.price.toFixed(2)}
                  </p>
                  <p className="shippingPolicy">
                    Tax included.{" "}
                    <NavLink to="/return-policy">Shipping calculated</NavLink>{" "}
                    at checkout.
                  </p>
                  <div>
                    <hr />
                    <span className="heading">QUANTITY :</span>
                  </div>
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
                  <button
                    className="addToCart"
                    onClick={() => {
                      if (user) {
                        dispatch(
                          addToCart({
                            id: data.id,
                            company: data.attributes.company,
                            name: data.attributes.name,
                            price: data.attributes.price,
                            img: data.attributes.img1.data.attributes.url,
                            quantity,
                          })
                        );
                        notify1();
                      } else {
                        notify2();
                      }
                    }}
                  >
                    ADD TO CART
                  </button>
                  <ToastContainer />
                  <span className="heading">DESCRIPTION :</span>
                  <div className="description">{data?.attributes?.desc}</div>
                </div>
              </div>
            </>
          )}
        </div>
        <p className="legend">MORE PRODUCTS LIKE THIS</p>
        <RelatedProductList rel={rel} productId={productId} />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
