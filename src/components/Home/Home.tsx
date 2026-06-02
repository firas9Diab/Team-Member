import styles from "./Home.module.scss";
import { useEffect, useState, type SetStateAction } from "react";
import Header from "../Header/Header";
import Tabs from "../Tabs/Tabs";
import UserList from "../UserList/UserList";
import axios from "axios";
export interface UserData {
  id: string;
  name: string;
  role: string;
  status: string;
  isFavorite: boolean;
  avatar: string;
}

const Home = () => {
  const [usersMockData, setUsersMockData] = useState<UserData[]>([]);
  const [paginatedUsers, setPaginatedUsers] = useState<UserData[]>([]);
  const [filter, setFilter] = useState<UserData[]>([]);
  const [activeTab, setActiveTab] = useState("all");
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  function onsearch(input: string) {
    setInputValue(input);
  }

  useEffect(() => {
    const newArr = usersMockData.filter((user) => {
      const matchesSearch = user.name
        .toLowerCase()
        .includes(inputValue.toLowerCase());

      if (!matchesSearch) return false;

      if (activeTab === "all") return true;

      if (activeTab === "favorites") return user.isFavorite;

      if (activeTab === "active") return user.status === "active";

      if (activeTab === "inactive") return user.status === "inactive";

      return false;
    });

    setFilter(newArr);
    const calculatedPages = Math.ceil(newArr.length / 8);
    setTotalPages(calculatedPages || 1);
  }, [inputValue, activeTab, usersMockData]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      const favorite = await getFavorite();

      if (users) {
        const updatedUsers = users.map((user: any) => ({
          ...user,
          isFavorite: favorite.includes(user.id),
        }));

        setUsersMockData(updatedUsers);
      }
    };

    fetchUsers();
  }, []);
  useEffect(() => {
    setCurrentPage(1);
  }, [inputValue, activeTab]);
  useEffect(() => {
    const startIndex = (currentPage - 1) * 8;
    const endIndex = startIndex + 8;

    // Slice exactly 8 users out of the filtered pool
    const current8Users = filter.slice(startIndex, endIndex);

    setPaginatedUsers(current8Users);
  }, [currentPage, filter]);

  const getUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `http://localhost:3000/team-members?page=1&limit=1000`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.data && response.data.meta) {
        setTotalPages(response.data.meta.totalPages);
      }
      const users = response.data.data.map((user: any) => ({
        id: String(user.id),
        name: user.fullName,
        role: user.jobTitle,
        status: user.status.toLowerCase(),
        isFavorite: user.isFavorite,
        avatar: user.avatarUrl,
      }));

      return users;
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async (
    fullName: string,
    jobTitle: string,
    status: string,
    avatarUrl: string,
  ) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3000/team-members",
        { fullName, jobTitle, status: status.trim().toUpperCase(), avatarUrl },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log("RESPONSE:", response.data);

      const user = response.data?.data ?? response.data;
      const newUser = {
        id: String(user.id),
        name: user.fullName,
        role: user.jobTitle,
        status: user.status.toLowerCase(),
        isFavorite: user.isFavorite ?? false,
        avatar: user.avatarUrl,
      };
      if (currentPage === totalPages) {
        setUsersMockData((prev) => [...prev, newUser]);
      } else {
        setCurrentPage(totalPages);
      }
    } catch (error: any) {
      console.log("FULL ERROR:", error);
    }
  };

  const getFavorite = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:3000/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.favorites.map((fav: any) => String(fav.id));
  };

  const toggleFav = async (id: string) => {
    const fav = usersMockData.find((user) => user.id === id);
    if (!fav) return;

    const isCurrentlyFavorite = fav.isFavorite;
    const token = localStorage.getItem("token");

    try {
      if (!isCurrentlyFavorite) {
        await axios.post(
          `http://localhost:3000/users/me/favorites/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
      } else {
        await axios.delete(`http://localhost:3000/users/me/favorites/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      const updatedArray = usersMockData.map((user) =>
        user.id === id ? { ...user, isFavorite: !user.isFavorite } : user,
      );

      setUsersMockData(updatedArray);
      setFilter(updatedArray);
    } catch (error) {
      console.error("Failed to update favorite status:", error);
    }
  };

  return (
    <div>
      <div className={styles.head}>
        <Header count={usersMockData.length} />
        <hr />
        <Tabs
          onSearch={onsearch}
          setActiveTab={setActiveTab}
          users={usersMockData}
        />
        <UserList
          users={paginatedUsers}
          fav={toggleFav}
          add={addUser}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Home;
