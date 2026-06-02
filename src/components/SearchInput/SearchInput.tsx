import searchIcon from "../../../Icons/searchIcon.svg";
import styles from "./SearchInput.module.scss";
type Props = {
  selectedPage: number;
  search: string;
  setSearch: (value: string) => void;
  fetchUsers: (page?: number, filter?: string, search?: string) => void;
};
const SearchInput = ({ selectedPage, search, setSearch, fetchUsers }: Props) => {
  return (
    <div className={styles.SearchInput}>
      <input
        type="text"
        value={search}
        placeholder="Search users..."
        className={styles.Search}
        onChange={(e) => {setSearch(e.target.value);
          fetchUsers(selectedPage, search, e.target.value);
        }}
      />

      <button className={styles.button}>
        <img src={searchIcon} alt="" />
      </button>
    </div>
  );
};

export default SearchInput;
