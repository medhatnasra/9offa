import React, { useContext, useEffect } from "react";

import { Outlet } from "react-router";

import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";

export const ProtectedRoutes = () => {
  const { isUserAuth } = useContext(MyContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserAuth) {
      return navigate("/login", { replace: true });
    }
  });

  return <Outlet />;
};
