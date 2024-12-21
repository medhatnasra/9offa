import { createContext, useState } from "react";

export const MyContext = createContext("");

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isUserAuth, SetisUserAuth] = useState(false);

  return (
    <MyContext.Provider
      value={{
        authToken,
        setAuthToken,
        user,
        setUser,
        SetisUserAuth,
        isUserAuth,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
