import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Login from "./components/Login/Login";
import SignUp from "./components/Sign up/sign_up";
import Home from "./components/Home/Home";
import AddUser from "./components/AddUser/AddUser";

interface User {
  id: number;
  name: string;
  role: string;
  status: string;
  isFavorite: boolean;
  avatar: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const fetchUsers = async (page: number=1) => {
    const token = localStorage.getItem("token");

    const response = await axios.get("http://localhost:3000/team-members", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit: 5,
        page: page,
      },
    });

    const mapped = response.data.data.map((user: any) => ({
      id: user.id,
      name: user.fullName,
      role: user.jobTitle,
      status: user.status?.toLowerCase(),
      isFavorite: user.isFavorite ?? false,
      avatar: user.avatarUrl,
    }));
    setTotalPages(response.data.meta.totalPages);
    setUsers(mapped);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home users={users} fetchUsers={fetchUsers} totalPages={totalPages} />
        }
      />
      <Route path="/AddUser" element={<AddUser fetchUsers={fetchUsers} />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
};

export default App;
