import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Item from "./components/Item/Item";
import SignUp from "./components/User/Sign Up/SignUp";
import Login from "./components/User/Login/Login";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/item/:id"
          element={
            <ProtectedRoute>
              <Item />
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
