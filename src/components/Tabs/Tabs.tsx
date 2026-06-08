import { useState } from "react";
import styles from "./Tabs.module.scss";
import searchIcon from "../../assets/searchIcon.svg";
import type { UserData } from "../../interface";
import type { ITabs } from "../../interface";

const Tabs = ({ onSearch, setActiveTab, users }: ITabs) => {
  const [click, setClick] = useState(1);

  const favorite2 = users.filter((user) => user.isFavorite).length;

  const active2 = users.filter((user) => user.status === "active").length;

  const inactive2 = users.filter((user) => user.status === "inactive").length;

  return (
    <div className={styles.Header}>
      <div className={styles.tabs}>
        <button
          className={`${click === 1 ? styles.active : ""}`}
          onClick={() => {
            setClick(1);
            setActiveTab("all");
          }}
        >
          All {"(" + users.length + ")"}
        </button>
        <button
          className={`${click === 2 ? styles.active : ""}`}
          onClick={() => {
            setClick(2);
            setActiveTab("favorites");
          }}
        >
          Favorites {"(" + favorite2 + ")"}
        </button>
        <button
          className={`${click === 3 ? styles.active : ""}`}
          onClick={() => {
            setClick(3);
            setActiveTab("active");
          }}
        >
          Active {"(" + active2 + ")"}
        </button>
        <button
          className={`${click === 4 ? styles.active : ""}`}
          onClick={() => {
            setClick(4);
            setActiveTab("inactive");
          }}
        >
          Inactive {"(" + inactive2 + ")"}
        </button>
      </div>

      <div>
        <div className={styles.search}>
          <input
            className={styles.inputName}
            type="text"
            placeholder="Search Users..."
            onChange={(e) => {
              onSearch(e.target.value);
            }}
          />

          <img src={searchIcon} alt="searchIcon" className={styles.searchImg} />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
