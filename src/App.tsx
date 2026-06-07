import { Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import SignUp from "./components/Sign up/sign_up";
import Home from "./components/Home/Home";
import AddUser from "./components/AddUser/AddUser";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute><Home /></ProtectedRoute>
      } />
      <Route path="/AddUser" element={<ProtectedRoute><AddUser /></ProtectedRoute>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/UpdateUser/:personId" element={<ProtectedRoute><UpdateUser /></ProtectedRoute>} />
    </Routes>
  );
};

export default App;
