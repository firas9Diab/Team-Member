import { Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login"
import SignUp from "./components/Sign up/sign_up"
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div>
      
      <Routes>
         <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
           <Route path="/SignUp" element={<SignUp/>} />
      </Routes>
    </div>
  );
};

export default App;
