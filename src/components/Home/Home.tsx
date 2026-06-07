import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
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
  const [userData, setUserData] = useState<UserData[]>([]);
  const [activeTab, setActiveTab] = useState("all");
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  function onsearch(input: string) {
    setInputValue(input);
  }

  const getUsers = async (page: number) => {
    try {
      const token = localStorage.getItem("token");
      let url = `http://localhost:3000/team-members?page=${page}&limit=8&search=${inputValue}`;
      if (activeTab === "active" || activeTab === "inactive") {
        url += `&status=${activeTab.toUpperCase()}`;
      } else if (activeTab === "favorites") {
        url += `&favoritesOnly=true`;
      }
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
    const fav = userData.find((user) => user.id === id);
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

      const users = await getUsers(currentPage);
      const favorite = await getFavorite();

      if (users) {
        const updatedUsers = users.map((user: any) => ({
          ...user,
          isFavorite: favorite.includes(user.id),
        }));
        setUserData(updatedUsers);
      }
    } catch (error) {
      console.error("Failed to update favorite status:", error);
    }
  };

  const deleteicon = async (id: string) => {
    const token = localStorage.getItem("token");

    try {
      await axios.delete(`http://localhost:3000/team-members/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const users = await getUsers(currentPage);
      const favorite = await getFavorite();

      if (users) {
        const updatedUsers = users.map((user: any) => ({
          ...user,
          isFavorite: favorite.includes(user.id),
        }));
        setUserData(updatedUsers);
      }
    } catch (error) {
      console.error("Failed to update favorite status:", error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers(currentPage);
      const favorite = await getFavorite();

      if (users) {
        const updatedUsers = users.map((user: any) => ({
          ...user,
          isFavorite: favorite.includes(user.id),
        }));

        setUserData(updatedUsers);
      }
    };

    fetchUsers();
  }, [currentPage, inputValue, activeTab]);

  useEffect(() => {
    setCurrentPage(1);
  }, [inputValue, activeTab]);

  return (
    <div>
      <div className={styles.head}>
        <Header count={userData.length} />
        <hr />
        <Tabs
          onSearch={onsearch}
          setActiveTab={setActiveTab}
          users={userData}
        />
        <UserList
          users={userData}
          Favorite={toggleFav}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          Delete={deleteicon}
        />
      </div>
    </div>
  );
};

export default Home;
