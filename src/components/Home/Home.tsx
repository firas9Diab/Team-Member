import axios from "axios";
import { useEffect, useState } from "react";
const Home = () => {
  const [userData, setUserData] = useState("");

  const getUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/Auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return <div></div>;
};

export default Home;
