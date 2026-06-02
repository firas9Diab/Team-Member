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
  const fetchUsers = async (
    page: number = 1,
    filter: string = "All",
    search: string = "",
  ) => {
    const token = localStorage.getItem("token");

    const params: any = {
      limit: 5,
      page,
    };

 if(search.trim() !== "")
      params.search = search;
    
    if (filter === "Favorites") params.favoritesOnly = true;
    else if (filter === "Active") params.status = "ACTIVE";
    else if (filter === "Inactive") params.status = "INACTIVE";

    const response = await axios.get("http://localhost:3000/team-members", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
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

  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const favoritesCount = users.filter((u) => u.isFavorite).length as number;

  const activeCount = users.filter((u) => u.status === "active")
    .length as number;

  const inactiveCount = users.filter((u) => u.status === "inactive")
    .length as number;

  const pages: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter((person) => {
      const matchSearch =
        person.name.toLowerCase().includes(search.toLowerCase()) ||
        person.role.toLowerCase().includes(search.toLowerCase());

      if (selectedFilter === "All") return matchSearch;

      if (selectedFilter === "Favorites")
        return person.isFavorite && matchSearch;

      if (selectedFilter === "Active")
        return person.status === "active" && matchSearch;

      if (selectedFilter === "Inactive")
        return person.status === "inactive" && matchSearch;

      return false;
    });

    setFilteredUsers(filtered);
  }, [search, selectedFilter, users]);

  return (
    <>
      <Header count={users.length} />

      <div className={styles.main}>
        <div className={styles.container2}>
          <FilterTabs
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            favoritesCount={favoritesCount}
            activeCount={activeCount}
            inactiveCount={inactiveCount}
            allCount={users.length}
             fetchusers={fetchUsers}
            setSelectedPage={setSelectedPage}
          />

          <SearchInput search={search} setSearch={setSearch} />
        </div>

        <div className={styles.container3}>
          <UserList users={filteredUsers} />
        </div>
        <div className={styles.container4}>
          <ul className={styles.list}>
            {pages.map((page) => (
              <button
                className={styles.pageButton}
                onClick={() => {
                  setSelectedPage(page);
                  fetchUsers(page,selectedFilter,search);
                }}
               
                className={
                  selectedPage === page
                    ? styles.activePageButton
                    : styles.pageButton
                }
              >
                {page}
              </button>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
