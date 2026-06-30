import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import type { IProtectedRoute } from "./components/interface";
const ProtectedRoute = ({ children, search, setSearch }: IProtectedRoute) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/User/Login");
    }
  }, [token, navigate]);
  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      {children}
    </div>
  );
};
export default ProtectedRoute;
