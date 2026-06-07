import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import FilterTabs from "../FilterTabs/FilterTabs";
import SearchInput from "../SearchInput/SearchInput";
import UserList from "../UserList/UserList";
import axios from "axios";
interface User {
  id: number;
  name: string;
  role: string;
  status: string;
  isFavorite: boolean;
  avatar: string;
}

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setcurrentPage] = useState<number>(1);
  const [isModelOpen, setisModelOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("")



  const fetchUsers = async (
    page: number = 1,
    filter: string = selectedFilter,
    searchValue: string = search,
  ) => {
    const token = localStorage.getItem("token");

    const response = await axios.get("http://localhost:3000/team-members", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        search: searchValue || undefined,
        status:
          filter === "Active"
            ? "ACTIVE"
            : filter === "Inactive"
              ? "INACTIVE"
              : undefined,
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


  const handleDelete = async (deletedperson: number) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:3000/team-members/${deletedperson}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await fetchUsers(currentPage, selectedFilter, search);
      setisModelOpen(false);
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
          },
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
          <UserList users={users} handleToggleFavorite={handleToggleFavorite} handleDelete={handleDelete} setisModelOpen={setisModelOpen} isModelOpen={isModelOpen} loading={loading} error={error} />
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
                  className={
                    currentPage === i + 1
                      ? styles.activePageButton
                      : styles.pageButton
                  }
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
