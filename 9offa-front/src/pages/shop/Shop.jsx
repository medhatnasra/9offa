import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "../../components/item/Item";

const Shop = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    FetchProducts();
  }, []);

  const FetchProducts = async () => {
    const result = await axios.get("http://localhost:4000/api/product", {
      withCredentials: true,
    });

    setProducts(result.data.products);
  };

  return (
    <div className="card-group">
      {Products.map((item, index) => {
        return <Item item={item} key={index} />;
      })}
    </div>
  );
};

export default Shop;
