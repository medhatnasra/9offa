import React from "react";

import "react-toastify/dist/ReactToastify.css";
import { useLoginAuth } from "../../hooks/useLoginAuth";
import { LoginForm } from "../../components/loginform/LoginForm";

export const LoginPage = () => {
  const { handlechange, formData, handleSubmit } = useLoginAuth();

  return (
    <>
      <LoginForm
        handlechange={handlechange}
        formData={formData}
        handlesubmit={handleSubmit}
      />
    </>
  );
};
