import searchIcon from "../../../Icons/searchIcon.svg";
import styles from "./SearchInput.module.scss";
type Props = {
  search: string;
  setSearch: (value: string) => void;
  fetchusers: (page?: number, filter?: string, search?: string) => void;
};
const SearchInput = ({ search, setSearch, fetchusers }: Props) => {
  return (
    <div className={styles.SearchInput}>
      <input
        type="text"
        value={search}
        placeholder="Search users..."
        className={styles.Search}
        onChange={(e) => {setSearch(e.target.value);
          fetchusers(1, undefined, e.target.value);
        }}
      />

      <button className={styles.button}>
        <img src={searchIcon} alt="" />
      </button>
    </div>
  );
};

export default SearchInput;
