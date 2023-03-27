import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const products = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/0327/0467/products/ApogeePlanter_PantheraBlack_400x.jpg?v=1624353400",
    name: "Keyboard",
    price: "$ 75.00",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/0327/0467/products/ApogeePlanter_PantheraBlack_400x.jpg?v=1624353400",
    name: "Mouse",
    price: "$ 99.99",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/0327/0467/products/ApogeePlanter_PantheraBlack_400x.jpg?v=1624353400",
    name: "Headphones",
    price: "$ 50.00",
  },
];

const CategorySlider = () => {
  return (
    <div>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default CategorySlider;
