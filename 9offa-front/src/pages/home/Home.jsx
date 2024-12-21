import React, { useCallback, useContext } from "react";
import { MyContext } from "../../context/MyContext";

export const Home = () => {
  const { authToken, setAuthToken, user, setUser, isUserAuth } =
    useContext(MyContext);

  console.log(user);

  return (
    <>
      <div>Home</div>
    </>
  );
};
