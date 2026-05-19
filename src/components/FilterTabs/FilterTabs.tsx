import styles from "./FilterTabs.module.scss";

const FilterTabs = ({
  selectedFilter,
  setSelectedFilter,
  Favorites_count,
  Active_count,
  Inactive_count,
  All_count,
}) => {
  const items = ["All", "Favorites", "Active", "Inactive"];

  const getCount = (id) => {
    if (id === "All") return All_count;
    if (id === "Favorites") return Favorites_count;
    if (id === "Active") return Active_count;
    if (id === "Inactive") return Inactive_count;
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
