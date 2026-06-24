import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import { useLocation } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import Settings from "./components/Settings/Settings";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Footer from "./components/Footer/Footer";

const App = () => {
  const location = useLocation();
  const [search, setSearch] = useState("");

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const hideNavbar =
    location.pathname === "/sign" || location.pathname === "/login";

  return (
    <div>
      {!hideNavbar && (
        <Navbar search={search} handleSearchChange={handleSearchChange} />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home search={search} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/products/:id"
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
        />

        <Route path="/sign" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
