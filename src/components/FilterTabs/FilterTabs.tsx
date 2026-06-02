import { useNavigate } from "react-router-dom";
import styles from "./FilterTabs.module.scss";
import { useState } from "react";
type FilterTabsProps = {
  selectedFilter: string;
  setSelectedFilter: (value: string) => void;
  favoritesCount: number;
  activeCount: number;
  inactiveCount: number;
  fetchusers: (page?: number, filter?: string, search?: string) => void;
  allCount: number;
};
const FilterTabs = ({
  selectedFilter,
  setSelectedFilter,
  favoritesCount,
  activeCount,
  inactiveCount,
  fetchusers,
  allCount,
}: FilterTabsProps) => {
  const navigate = useNavigate();
  const items: string[] = ["All", "Favorites", "Active", "Inactive"];
  const [clickpower, setClickPower] = useState<boolean>(false);
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
            onClick={() => {
              setSelectedFilter(id);
              setClickPower(true);
              fetchusers(1, id, "");
            }}
            disabled={clickpower && selectedFilter === id}
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
