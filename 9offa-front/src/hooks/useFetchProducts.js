import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchProducts = () => {
  const [Products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState(null);

  const FetchProducts = async () => {
    setIsLoading(true);
    try {
      const result = await axios.get("http://localhost:4000/api/product", {
        withCredentials: true,
      });
      setProducts(result.data.products);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    FetchProducts();
  }, []);

  return { Products, Error, isLoading };
};
