import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import FilterTabs from "../FilterTabs/FilterTabs";
import SearchInput from "../SearchInput/SearchInput";
import UserList from "../UserList/UserList";

interface user {
  id: string;
  name: string;
  role: string;
  status: string;
  isFavorite: boolean;
  avatar: string;
}
const Home = () => {
  const usersMockData: user[] = [
    {
      id: "2b7e2c6e-7c6a-4f5f-8c6e-2f1d0e6c9a01",
      name: "Alex Johnson",
      role: "Frontend Developer",
      status: "active",
      isFavorite: true,
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: "8c1d5a24-3e6f-4f90-a2b7-1c9e7f6d2a12",
      name: "Sarah Williams",
      role: "UI/UX Designer",
      status: "active",
      isFavorite: false,
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    {
      id: "f13a8d49-8d47-45a7-b9bb-5b38c1e20344",
      name: "Michael Brown",
      role: "Backend Developer",
      status: "active",
      isFavorite: true,
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: "a96d58ef-8e35-4a91-9e8f-4c56f2bc7e21",
      name: "Emily Davis",
      role: "Product Manager",
      status: "inactive",
      isFavorite: false,
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: "74f9c8b7-28e2-4f5d-8c77-19f8265f456a",
      name: "David Wilson",
      role: "DevOps Engineer",
      status: "active",
      isFavorite: false,
      avatar: "https://i.pravatar.cc/150?img=13",
    },
    {
      id: "c1e6f7d2-98a2-4f79-b6d5-5c9f3a7e8120",
      name: "Lisa Anderson",
      role: "QA Engineer",
      status: "inactive",
      isFavorite: true,
      avatar: "https://i.pravatar.cc/150?img=44",
    },
    {
      id: "e3f89b10-6b8a-44ef-b0d3-91f72d5c4a33",
      name: "James Taylor",
      role: "Full Stack Developer",
      status: "active",
      isFavorite: false,
      avatar: "https://i.pravatar.cc/150?img=15",
    },
    {
      id: "5d4b7e31-f9d8-47e1-a7c9-6a2e4f8d0b55",
      name: "Olivia Martinez",
      role: "Marketing Specialist",
      status: "inactive",
      isFavorite: false,
      avatar: "https://i.pravatar.cc/150?img=45",
    },
  ];

  const [users] = useState<user[]>(usersMockData);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<user[]>([]);
  const favoritesCount: number = users.filter(
    (user) => user.isFavorite === true,
  ).length;

  const activeCount: number = users.filter(
    (user) => user.status === "active",
  ).length;

  const inactiveCount: number = users.filter(
    (user) => user.status === "inactive",
  ).length;

  useEffect(() => {
    const newArray2: user[] = users.filter((person) => {
      const personSearch = person.name
        .toLowerCase()
        .includes(search.toLowerCase());

      if (selectedFilter === "All") {
        return personSearch;
      }
      if (selectedFilter === "Favorites") {
        return person.isFavorite && personSearch;
      }

      if (selectedFilter === "Active") {
        return person.status === "active" && personSearch;
      }

      if (selectedFilter === "Inactive") {
        return person.status === "inactive" && personSearch;
      }
    });
    setFilteredUsers(newArray2);
  }, [search, selectedFilter, users]);

  return (
    <>
      <Header count={usersMockData.length} />
      <div className={styles.main}>
        <div className={styles.container2}>
          <FilterTabs
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            favoritesCount={favoritesCount}
            activeCount={activeCount}
            inactiveCount={inactiveCount}
            allCount={usersMockData.length}
          />
          <SearchInput search={search} setSearch={setSearch} />
        </div>
        <div className={styles.container3}>
          <UserList users={filteredUsers} />
        </div>
      </div>
    </>
  );
};

export default Home;
