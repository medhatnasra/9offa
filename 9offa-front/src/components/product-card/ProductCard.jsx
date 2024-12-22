import React from "react";

export const ProductCard = ({ product }) => {
  return (
    <div className="card m-1" style={{ minWidth: "18rem" }}>
      <img
        className="card-img-top"
        src={product.image.url}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <a href="#" className="btn btn-primary">
          Go Details
        </a>
      </div>
    </div>
  );
};
