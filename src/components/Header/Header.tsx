import styles from "./Header.module.scss";
import UsersIcon from "../../assets/UsersIcon.svg";

const Header = ({ count }: { count: number }) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.team}>
          <img src={UsersIcon} alt="user icon" className={styles.UsersIcon} />
          <div className={styles.text}>
            <h1>Team Members</h1>
            <p>Browse and filter team members</p>
          </div>
        </div>
        <div className={styles.total}>
          <div className={styles.TotalUsers}>
            <p>Total Users</p>
            <p className={styles.totalCount}>{count}</p>
          </div>
          <img src={UsersIcon} alt="user icon" />
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Header;
