import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const useRegAuth = () => {
  const navigate = useNavigate();

  const [FormData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    isVendor: "",
  });

  const handlechange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? "vendor" : value,
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    onSubmit(FormData);
  };

  const onSubmit = async ({
    firstname,
    lastname,
    email,
    phone,
    password,
    isVendor,
  }) => {
    try {
      if (firstname === "") return toast.error("Firstname is required !");
      if (lastname === "") return toast.error("Lastname is required !");
      if (email === "") return toast.error("email is required !");
      if (phone === "") return toast.error("Phone is required !");
      if (password === "") return toast.error("Password is required !");

      const result = await axios.post("http://localhost:4000/api/register/", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        password: password,
        role: isVendor === "" ? "client" : isVendor,
      });

      if (result.status === 201) {
        navigate("/login", { replace: true });
        toast.success("Registred Successfully ..");
      }
    } catch (err) {
      const finalerror = err.response.data.message.replace(/"/g, "");
      return toast.error(finalerror);
    }
  };

  return { onSubmit, handlechange, handlesubmit, FormData };
};
