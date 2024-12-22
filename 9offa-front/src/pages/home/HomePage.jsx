import React, { useCallback, useContext } from "react";
import { MyContext } from "../../context/MyContext";

export const HomePage = () => {
  const { authToken, setAuthToken, user, setUser, isUserAuth } =
    useContext(MyContext);

  return (
    <>
      <div>Home</div>
    </>
  );
};
