import searchIcon from "../../../Icons/searchIcon.svg";
import styles from "./SearchInput.module.scss";
import type { SearchProps } from "../Home/Logic/interface";

const SearchInput = ({ search, setSearch }: SearchProps) => {
  return (
    <div className={styles.SearchInput}>
      <input
        type="text"
        value={search}
        placeholder="Search users..."
        className={styles.Search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <button className={styles.button}>
        <img src={searchIcon} alt="" />
      </button>
    </div>
  );
};

export default SearchInput;
