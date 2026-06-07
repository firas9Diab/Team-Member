import { useNavigate } from "react-router-dom";
import styles from "./FilterTabs.module.scss";

type FilterTabsProps = {
  selectedFilter: string;
  setSelectedFilter: (value: string) => void;
  allCount: number;
};

const FilterTabs = ({
  selectedFilter,
  setSelectedFilter,

  allCount,
}: FilterTabsProps) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token')

  const items: string[] = ["All", "Favorites", "Active", "Inactive"];

  const getCount = (id: string) => {
    if (id === "All") return allCount;

    return 0;
  };

  return (
    <ul className={styles.list}>
      <li>
        <button type="button" onClick={() => {
          localStorage.removeItem("token");
          navigate("/Login");
        }}
          className={styles.link}>
          {!token ? "Log in" : "sign out"}
        </button>
      </li>
      <li>
        <button onClick={() => navigate("/AddUser")} className={styles.link}>
          Add User
        </button>
      </li>

      {items.map((id) => (
        <li key={id}>
          <button
            onClick={() => {
              setSelectedFilter(id);
            }}
            disabled={selectedFilter === id}
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
