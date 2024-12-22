import React from "react";
import "./Register.css";
import "react-toastify/dist/ReactToastify.css";
import { useRegAuth } from "../../hooks/useRegAuth";
import { RegisterForm } from "../../components/registerform/RegisterForm";

export const RegisterPage = () => {
  const { handlechange, handlesubmit, FormData } = useRegAuth();

  return (
    <>
      <RegisterForm
        handlechange={handlechange}
        FormData={FormData}
        handlesubmit={handlesubmit}
      />
    </>
  );
};
