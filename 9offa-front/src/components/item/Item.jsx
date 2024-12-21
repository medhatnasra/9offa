import React from "react";

const Item = ({ item }) => {
  return (
    <div class="card m-1" style={{ minWidth: "18rem" }}>
      <img class="card-img-top" src="..." alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{item.name}</h5>
        <p class="card-text">{item.description}</p>
        <a href="#" class="btn btn-primary">
          Go Details
        </a>
      </div>
    </div>
  );
};

export default Item;
