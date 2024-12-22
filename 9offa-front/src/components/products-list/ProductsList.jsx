import React from "react";
import { ProductCard } from "../product-card/ProductCard";

export const ProductsList = ({ products }) => {
  return products.map((product, index) => (
    <ProductCard product={product} key={index} />
  ));
};
