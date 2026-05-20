import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Tabs from "../Tabs/Tabs";
import UserList from "../UserList/UserList";

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
  const [filter, setFilter] = useState<UserData[]>([]);
  const [activeTab, setActiveTab] = useState("all");
  const [inputValue, setInputValue] = useState("");

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
  }, [inputValue, activeTab, usersMockData]);

  useEffect(() => {
    setUsersMockData([
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
        avatar: "https://i.pravatar.cc/150?img=16",
      },
      {
        id: "5d4b7e31-f9d8-47e1-a7c9-6a2e4f8d0b55",
        name: "Olivia Martinez",
        role: "Marketing Specialist",
        status: "inactive",
        isFavorite: false,
        avatar: "https://i.pravatar.cc/150?img=45",
      },
    ]);
  }, []);

  function toggleFav(id: string) {
    const newArr = usersMockData.map((ele) =>
      ele.id === id ? { ...ele, isFavorite: !ele.isFavorite } : ele,
    );

    setFilter(newArr);
    setUsersMockData(newArr);
  }
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
        <UserList users={filter} fav={toggleFav} />
      </div>
    </div>
  );
};

export default Home;
