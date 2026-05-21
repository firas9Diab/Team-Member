import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Sign from "./components/Sign/Sign";
import Login from "./components/Login/Login";
// import Item from "./components/Item/Item";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/item/:id" element={<Item />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/Sign" element={<Sign />} />
      </Routes>
    </div>
  );
};

export default App;
