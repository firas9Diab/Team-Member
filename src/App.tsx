import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Sign from "./components/Sign/Sign";
import Login from "./components/Login/Login";
import UpdateUser from "./components/Update/UpdateUser";
import AddUser from "./components/Add/AddUser";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/Sign" element={<Sign />} />
        <Route
          path="/UpdateUser/:id"
          element={
            <ProtectedRoute>
              <UpdateUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/AddUser"
          element={
            <ProtectedRoute>
              <AddUser />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
