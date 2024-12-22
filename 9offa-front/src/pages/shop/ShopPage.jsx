import React from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { Loading } from "../../components/loading/Loading";
import { ErrorUI } from "../../components/error/Error";
import { ProductsList } from "../../components/products-list/ProductsList";

export const ShopPage = () => {
  const { isLoading, Error, Products } = useFetchProducts();

  return (
    <div className="card-group">
      {isLoading && <Loading />}
      {Error && <ErrorUI />}
      {Products && <ProductsList products={Products} />}
    </div>
  );
};
