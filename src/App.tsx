import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SignUp from "./components/User/Sign Up/SignUp";
import Login from "./components/User/Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import Settings from "./components/User/Settings/Settings";
import { useState } from "react";
import ProjectInfromation from "./components/ItemCards/Product/Product Information/ProductInfromation";
import Cart from "./components/ItemCards/Product/Cart/Cart";
import Orders from "./components/ItemCards/Product/Orders/Orders";
const App = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute
              search={search}
              setSearch={(s?: string) => setSearch(s ?? "")}
            >
              <Home search={search} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/User/Settings"
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
              <ProjectInfromation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/User/SignUp" element={<SignUp />} />
        <Route path="/User/Login" element={<Login />} />
      </Routes>
    </div>
  );
};
export default App;
