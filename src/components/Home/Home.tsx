import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Tabs from "../Tabs/Tabs";
import UserList from "../UserList/UserList";
import Popup from "../Popup/Popup";
import useHomeHook from "../../useHomeHook";

const Home = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const { userData, totalPages, toggleFav, handleDeleteUser } = useHomeHook(
    activeTab,
    inputValue,
    currentPage,
  );

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
          handleToggleFav={toggleFav}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          handleDeleteUser={handleDeleteClick}
        />
      </div>
      {showPopup && (
        <Popup
          handleDeleteTrue={confirmDelete}
          handleCancel={() => {
            setShowPopup(false);
            setSelectedUserId(null);
          }}
        />
      )}
    </div>
  );
};

export default Home;
