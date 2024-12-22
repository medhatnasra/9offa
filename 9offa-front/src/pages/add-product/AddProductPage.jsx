import React from "react";

import { useAddProducts } from "../../hooks/useAddProducts";
import { AddProductForm } from "../../components/addproduct-form/AddProductForm";

export const AddProductPage = () => {
  const { handlechange, onSubmit } = useAddProducts();

  return (
    <>
      <AddProductForm handlechange={handlechange} onSubmit={onSubmit} />
    </>
  );
};
