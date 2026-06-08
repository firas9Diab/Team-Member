import axios from "axios";
import { useEffect, useState } from "react";
import type { UserData } from "./interface";

const useHomeHook = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [activeTab, setActiveTab] = useState("all");
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

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
      return [];
    }
  };

  const getFavorite = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.favorites.map((fav: any) => String(fav.id));
    } catch (error) {
      console.log(error);
      return [];
    }
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

      await refreshUsers();
    } catch (error) {
      console.error("Failed to update favorite status:", error);
    }
  };

  const handleDeleteUser = async (id: string) => {
    const token = localStorage.getItem("token");

    try {
      await axios.delete(`http://localhost:3000/team-members/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await refreshUsers();
    } catch (error) {
      console.error("Failed to update favorite status:", error);
    }
  };

  const refreshUsers = async () => {
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

  const handleDeleteClick = (id: string) => {
    setSelectedUserId(id);
    setShowPopup(true);
  };

  const confirmDelete = async () => {
    if (selectedUserId) {
      await handleDeleteUser(selectedUserId);
    }

    setSelectedUserId(null);
    setShowPopup(false);
  };

  function onsearch(input: string) {
    setInputValue(input);
  }

  useEffect(() => {
    refreshUsers();
  }, [currentPage, inputValue, activeTab]);

  useEffect(() => {
    setCurrentPage(1);
  }, [inputValue, activeTab]);

  return {
    userData,
    totalPages,
    activeTab,
    setActiveTab,
    inputValue,
    setInputValue,
    currentPage,
    setCurrentPage,
    selectedUserId,
    setSelectedUserId,
    showPopup,
    setShowPopup,
    toggleFav,
    handleDeleteUser,
    handleDeleteClick,
    confirmDelete,
    onsearch,
  };
};

export default useHomeHook;
