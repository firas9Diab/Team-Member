import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import FilterTabs from "../FilterTabs/FilterTabs";
import SearchInput from "../SearchInput/SearchInput";
import UserList from "../UserList/UserList";

const Home = () => {
  const usersMockData = [
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

  const [users, setUsers] = useState(usersMockData);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [Search, setSearch] = useState("");
  const [filteredUsers, setfilteredUsers] = useState(usersMockData);
  //-------------------------------------------------------------------------------------------
  const [filter_count, setFilterCount] = useState({});
 const Favorites_count = users.filter(
  (user) => user.isFavorite === true
).length;

const Active_count = users.filter(
  (user) => user.status === "active"
).length;

const Inactive_count = users.filter(
  (user) => user.status === "inactive"
).length;


  useEffect(() => {
    const newarray2 = users.filter((person) => {
      if (selectedFilter === "All") {
        return person.name.toLowerCase().includes(Search.toLowerCase());
      }
      if (selectedFilter === "Favorites") {
     
        return person.isFavorite && person.name.includes(Search);
      }

      if (selectedFilter === "Active") {
     
        return person.status === "active" && person.name.includes(Search);
      }

      if (selectedFilter === "Inactive") {
       
        return person.status === "inactive" && person.name.includes(Search);
      }
    });
    console.log(newarray2.length);
    setfilteredUsers(newarray2);
  }, [Search, selectedFilter]);
  console.log(filteredUsers);
  /*
const filteredUsers = users.filter((person) => {
    if (items === "All") return true;
    if (items === "Favorites") return person.isFavorite;
    if (items === "Active") return person.status === "active";
    if (items === "Inactive") return person.status === "inactive";
  });

  

*/
  return (
    <>
      <Header count={usersMockData.length} />
      <div className={styles.main}>
        <div className={styles.container2}>
          <FilterTabs
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            Favorites_count={Favorites_count}
            Active_count={Active_count}
            Inactive_count={Inactive_count}
            All_count={usersMockData.length}
          />
          <SearchInput Search={Search} setSearch={setSearch} />
        </div>
        <div className={styles.container3}>
          <UserList users={filteredUsers} />
        </div>
      </div>
    </>
  );
};

export default Home;

/*

 const usersMockData = [
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


   const [users, setUsers] = useState(usersMockData);
  const [Filter,setFilter] = useState(["All", "Favorites", "Active", "Inactive"]);




   return(<>
 <Headers count={usersMockData.length}/>
 <div className={styles.container2}>
<FilterTabs />
<SearchInput />
 </div>
<div className={styles.container3}>
  <UserList users={users} Filter={Filter} />
</div>






 </> )

*/
/*
 const [items] = useState(["All", "Favorites", "Active", "Inactive"]);
  const usersMockData = [
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
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Team Members</h1>
      <p>browser and filter team memebers </p>
      <ul className={styles.list}>
        {items.map((id) => (
          <li key={id}>
            <Link to=".cardBoard" className={styles.link}>
              {id}
            </Link>
          </li>
        ))}
      </ul>

      <div id="cardBoard" className={styles.cardBoard}>
        {usersMockData.map((person) => (
          <div className={styles.card}>
        
        <div className={styles.star}>
        {person.isFavorite === true ? (
             <img src="../Icons/star-svgrepo-com.svg" />
            ) : (
              <img src="../Icons/star-light-svgrepo-com.svg" />
            )}
</div>

            <img src={person.avatar} className={styles.image} alt="" />
            <h3>{person.name}</h3>
            <p>{person.role}</p>

            {person.status === "active" ? (
              <span
                className={styles.active}
              >
                {person.status}
              </span>
            ) : (
              <span className={styles.inactive}>{person.status}</span>
            )}

          
          </div>
        ))}
      </div>
    </div>
  );

*/
