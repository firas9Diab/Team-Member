import styles from "./Home.module.scss";
import Header from "../Header/Header";
import FilterTabs from "../FilterTabs/FilterTabs";
import SearchInput from "../SearchInput/SearchInput";
import UserList from "../UserList/UserList";
import Modal from "../Modal/Modal";

import useHome from "./Logic/useHome";


const Home = () => {
  const {
    navigate,

    users,
    totalPages,
    currentPage,
    setcurrentPage,

    selectedFilter,
    setSelectedFilter,

    search,
    setSearch,

    loading,

    isModelOpen,
    changeModal,

    handleToggleFavorite,
    
  }=useHome()
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
