import { useState, useEffect } from "react";
import requestBuilder from "../utility/requestBuilder";

const useHome = () => {
  const [userData, setUserData] = useState("");

  const getUsers = async () => {
    try {
      const response = await requestBuilder({
        url: "http://localhost:3000/Auth/me",
        method: "GET",
      });

      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return {
    userData,
    getUsers,
  };
};

export default useHome;
