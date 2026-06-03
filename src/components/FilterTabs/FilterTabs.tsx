import { useNavigate } from "react-router-dom";
import styles from "./FilterTabs.module.scss";

type FilterTabsProps = {
  selectedFilter: string;
  setSelectedFilter: (value: string) => void;
  setSelectedPage: (value: number) => void;

  allCount: number;
};

const FilterTabs = ({
  selectedFilter,
  setSelectedFilter,
  setSelectedPage,

  allCount,
}: FilterTabsProps) => {
  const navigate = useNavigate();

  const items: string[] = ["All", "Favorites", "Active", "Inactive"];

  const getCount = (id: string) => {
    if (id === "All") return allCount;

    return 0;
  };

  return (
    <ul className={styles.list}>
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
              setSelectedPage(1);
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
