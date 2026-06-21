import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import { useLocation } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import Settings from "./components/Settings/Settings";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const location = useLocation();
  const [search, setSearch] = useState("");

  const hideNavbar =
    location.pathname === "/sign" || location.pathname === "/login";

  return (
    <div>
      {!hideNavbar && <Navbar search={search} setSearch={setSearch} />}

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

        <Route path="/sign" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
