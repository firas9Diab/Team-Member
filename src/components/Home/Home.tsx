import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import FilterTabs from "../FilterTabs/FilterTabs";
import SearchInput from "../SearchInput/SearchInput";
import UserList from "../UserList/UserList";
import Modal from "../Modal/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
interface User {
  id: number;
  name: string;
  role: string;
  status: string;
  isFavorite: boolean;
  avatar: string;
}

const Home = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState<User[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setcurrentPage] = useState<number>(1);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [SelectedUserById, setSelectedUserById] = useState<number | null>(null);

  const fetchUsers = async (
    page: number = 1,
    filter: string = selectedFilter,
    searchValue: string = search
  ) => {
    const token = localStorage.getItem("token");

    const response = await axios.get("http://localhost:3000/team-members", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        search: searchValue || undefined,
        status: filter === "Active" ? "ACTIVE" : filter === "Inactive" ? "INACTIVE" : undefined,
        favoritesOnly: filter === "Favorites" ? true : undefined,
        page,
        limit: 5,
      },
    });

    const mapped = response.data.data.map((user: any) => ({
      id: user.id,
      name: user.fullName,
      role: user.jobTitle,
      status: user.status.toLowerCase(),
      isFavorite: user.isFavorite ?? false,
      avatar: user.avatarUrl,
    }));

    setUsers(mapped);
    setTotalPages(response.data.meta.totalPages);
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`http://localhost:3000/team-members/${SelectedUserById}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      await fetchUsers(currentPage, selectedFilter, search);
      setIsModelOpen(false);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to delete user");
    }
  };

  const handleToggleFavorite = async (id: number, isFavorite: boolean) => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!isFavorite) {
        await axios.post(
          `http://localhost:3000/users/me/favorites/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        await axios.delete(`http://localhost:3000/users/me/favorites/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      await fetchUsers();
    } catch (error) {
      console.error("Favorite error:", error);
    } finally {
      setLoading(false);
    }
  };

  const changeModal = (id: number | null, confirmDelete: boolean) => {
    if (id !== null && confirmDelete === false) {
      setSelectedUserById(id);
      setIsModelOpen(true);
      return;
    }
    if (confirmDelete) {
      handleDelete();
      return;
    } else {
      setIsModelOpen(false);

      return;
    }
  };

  useEffect(() => {
    setcurrentPage(1);
  }, [selectedFilter, search]);

  useEffect(() => {
    fetchUsers(currentPage, selectedFilter, search);
  }, [currentPage, selectedFilter, search]);

  return (
    <div>
      <Header count={users.length} />

      <div className={styles.main}>
        <div className={styles.container2}>
          <FilterTabs
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            allCount={users.length}
          />

          <SearchInput search={search} setSearch={setSearch} />
        </div>

        <div className={styles.container3}>
          {isModelOpen && <Modal changeModal={changeModal} />}

          <UserList
            users={users}
            handleToggleFavorite={handleToggleFavorite}
            loading={loading}
            changeModal={changeModal}
            navigate={navigate}
          />
        </div>
        <div className={styles.container4}>
          <ul className={styles.list}>
            {new Array(totalPages).fill(0).map((_, i) => {
              return (
                <button
                  key={i + 1}
                  onClick={() => {
                    setcurrentPage(i + 1);
                  }}
                  disabled={currentPage === i + 1}
                  className={currentPage === i + 1 ? styles.activePageButton : styles.pageButton}
                >
                  {i + 1}
                </button>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
