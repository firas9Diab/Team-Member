import { useNavigate } from "react-router-dom";
import styles from "./FilterTabs.module.scss";
import axios from "axios";
type FilterTabsProps = {
  selectedFilter: string;
  setSelectedFilter: (value: string) => void;
  favoritesCount: number;
  activeCount: number;
  inactiveCount: number;
  allCount: number;
};
const FilterTabs = ({
  selectedFilter,
  setSelectedFilter,
  favoritesCount,
  activeCount,
  inactiveCount,
  allCount,
}: FilterTabsProps) => {
  const navigate = useNavigate();
  const items: string[] = ["All", "Favorites", "Active", "Inactive"];

  const getCount = (id: string) => {
    if (id === "All") return allCount;
    if (id === "Favorites") return favoritesCount;
    if (id === "Active") return activeCount;
    if (id === "Inactive") return inactiveCount;
  };

  return (
    <ul className={styles.list}>
      <li>
        {" "}
        <button
          onClick={() => {
            navigate("/AddUser");
          }}
          className={styles.link}
        >
          Add User
        </button>
      </li>
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
