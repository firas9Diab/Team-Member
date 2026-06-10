import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Item from "./components/Item/Item";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import { useLocation } from "react-router-dom";
const App = () => {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/sign" || location.pathname === "/login";

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
