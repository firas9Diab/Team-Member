import styles from "./FilterTabs.module.scss";

const FilterTabs = ({
  selectedFilter,
  setSelectedFilter,
  favoritesCount,
  activeCount,
  inactiveCount,
  allCount,
}) => {
  const items = ["All", "Favorites", "Active", "Inactive"];

  const getCount = (id) => {
    if (id === "All") return allCount;
    if (id === "Favorites") return favoritesCount;
    if (id === "Active") return activeCount;
    if (id === "Inactive") return inactiveCount;
  };

  return (
    <ul className={styles.list}>
      {items.map((id) => (
        <li key={id}>
          <button
            onClick={() => setSelectedFilter(id)}
            className={selectedFilter === id ? styles.active : styles.link}
          >
            {id} ({getCount(id)})
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FilterTabs;
