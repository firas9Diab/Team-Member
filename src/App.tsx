import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Item from "./components/Item/Item";
import NavBarRoute from "./NavBarRoute";
import SignUp from "./components/User/Sign Up/SignUp";
import Login from "./components/User/Login/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <NavBarRoute>
              <Home />
            </NavBarRoute>
          }
        />
        <Route
          path="/item/:id"
          element={
            <NavBarRoute>
              <Item />
            </NavBarRoute>
          }
        />
        <Route path="/User/SignUp" element={<SignUp />} />
        <Route path="/User/Login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
