import { Link } from "react-router-dom";
import { useState } from "react";
import setSearch from "../Home/Home";
import searchIcon from "../../../Icons/searchIcon.svg"
import styles from "./SearchInput.module.scss";

const SearchInput = ({ search, setSearch }) => {
  return (
    <div className={styles.SearchInput}>
      <input
        type="text"
        value={search}
        placeholder="Search users..."
        className={styles.Search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button className={styles.button}>
        <img src={searchIcon} alt="" />
      </button>
    </div>
  );
};

export default SearchInput;

