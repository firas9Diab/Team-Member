//import useHome from "../Hooks/useHome";
import Categories from "../Categories/Categories";
import styles from "./Home.module.scss";
const Home = () => {
  // const{userData,
  // getUsers,}=useHome();
  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainTexts}>
          <p className={styles.text}>#Big Fashion Sale</p>
          <h1 className={styles.mainText}>
            Limited Time Offer!
            <br /> Up to 50% OFF!
          </h1>
          <p className={styles.text}>Limited Time Offer! Up to 50% OFF!</p>
        </div>
      </div>
      <Categories />
    </>
  );
};

export default Home;
