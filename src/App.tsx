import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Item from "./components/Item/Item";
import SignUp from "./components/Sellers/Sign Up/SignUp";
import Login from "./components/Sellers/Login/Login";

const App = () => {
  return (
    
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/Sellers/SignUp" element={<SignUp />} />
        <Route path="/Sellers/Login" element={<Login />} />
      </Routes>
   
  );
};

export default App;
