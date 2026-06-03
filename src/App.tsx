import { Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import SignUp from "./components/Sign up/sign_up";
import Home from "./components/Home/Home";
import AddUser from "./components/AddUser/AddUser";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AddUser" element={<AddUser />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
};

export default App;
