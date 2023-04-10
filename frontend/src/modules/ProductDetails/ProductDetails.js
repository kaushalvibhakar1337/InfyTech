import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./ProductDetails.scss";
import RelatedProductList from "../../components/ProductList/RelatedProductList";

const ProductDetails = () => {
  const productId = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img1");
  const [quantity, setQuantity] = useState(1);
  const { data, loading, error } = useFetch(
    `/products/${productId}?populate=*`
  );
  const dispatch = useDispatch();
  const relatedProductsCategoryId = data?.attributes?.categories?.data[0]?.id;

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
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: data.id,
                          company: data.attributes.company,
                          name: data.attributes.name,
                          price: data.attributes.price,
                          img: data.attributes.img1.data.attributes.url,
                          quantity,
                        })
                      )
                    }
                  >
                    ADD TO CART
                  </button>
                  <span className="heading">DESCRIPTION :</span>
                  <div className="description">{data?.attributes?.desc}</div>
                </div>
              </div>
            </>
          )}
        </div>
        <p className="legend">MORE PRODUCTS LIKE THIS</p>
        <RelatedProductList relatedProducts={relatedProductsCategoryId} />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
