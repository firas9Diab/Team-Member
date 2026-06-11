import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default ProtectedRoute;
