import React, { useEffect, useState } from "react";
import axios from "axios";
export const useFetchUsers = () => {
  const [Users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState(null);

  const FetchUsers = async () => {
    setIsLoading(true);
    try {
      const result = await axios.get("http://localhost:4000/api/users/", {
        withCredentials: true,
      });
      setUsers(result.data);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    FetchUsers();
  }, []);

  return { Users, Error, isLoading, FetchUsers };
};
