import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const useAddProducts = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    image: null,
  });

  const handlechange = (e) => {
    const { value, name, type } = e.currentTarget;

    setData((prev) => ({
      ...prev,
      [name]: type === "file" ? e.target.files[0] : value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, description, category, price, image } = data;
      const formdata = new FormData();
      if (name.trim() === "") return toast.error("Product Name is Required!");

      if (category.trim() === "") return toast.error("Category is Required!");
      if (description.trim() === "")
        return toast.error("Description is Required!");
      if (price.trim() === "") return toast.error("Price is Required!");

      if (!image) return toast.error("Image is Required!");

      formdata.append("name", name);
      formdata.append("description", description);
      formdata.append("category", category);
      formdata.append("price", price);
      formdata.append("image", image);

      const result = await axios.post(
        "http://localhost:4000/api/product/",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
    } catch (err) {
      return toast.error(err.message);
    }
  };

  return { handlechange, onSubmit };
};
