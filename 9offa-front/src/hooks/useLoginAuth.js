import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { MyContext } from "../context/MyContext";

export const useLoginAuth = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { setAuthToken, setUser, SetisUserAuth } = useContext(MyContext);

  const onSubmit = async ({ email, password }) => {
    if (email === "") return toast.error("Email is required !");
    if (password === "") return toast.error("Password is required !");
    try {
      const result = await axios.post(
        "http://localhost:4000/api/login/",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );

      if (result.status === 200) {
        setAuthToken(result?.data.token);
        setUser(result?.data.userdetails);
        SetisUserAuth(true);
        navigate("/shop", { replace: true });
      }
    } catch (err) {
      const finalerror = err.response.data.message.replace(/"/g, "");
      return toast.error(finalerror);
    }
  };
  return { onSubmit, handlechange, formData, handleSubmit };
};
