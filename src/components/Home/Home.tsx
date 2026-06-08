import styles from "./Home.module.scss";
import Header from "../Header/Header";
import Tabs from "../Tabs/Tabs";
import UserList from "../UserList/UserList";
import Popup from "../Popup/Popup";
import useHomeHook from "../../useHomeHook";

const Home = () => {
  const {
    userData,
    totalPages,
    toggleFav,
    handleDeleteClick,
    confirmDelete,
    onsearch,
    setActiveTab,
    currentPage,
    setCurrentPage,
    setSelectedUserId,
    showPopup,
    setShowPopup,
  } = useHomeHook();

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
