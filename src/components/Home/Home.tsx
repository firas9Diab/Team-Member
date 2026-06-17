import useHome from "../Hooks/useHome";
import Categories from "../Categories/Categories";
import styles from "./Home.module.scss";
import sony from "../../Assets/sony.png";
import watch from "../../Assets/watch.png";
import Footer from "../Footer/Footer";

const Home = () => {
  const { todaysDeals, moreItems } = useHome();
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

      <div className={styles.section3}>
        <div className={styles.title}>
          <h1>Today’s </h1>
          <h1 className={styles.underline}>Deals</h1>
        </div>
        <div className={styles.line}>
          {todaysDeals.map((deal) => (
            <div key={deal.id} className={styles.deals}>
              <img src={deal.image} alt=" deals image " />
              <p>{deal.title}</p>
              <div className={styles.bottom}>
                <p>₹{deal.price}</p>
                <button> Buy Now !</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section4}>
        <div className={styles.title}>
          <h1>More Items to </h1>
          <h1 className={styles.underline}>Consider</h1>
        </div>
        <div className={styles.line}>
          {moreItems.map((item) => (
            <div key={item.id} className={styles.deals}>
              <img src={item.image} alt=" deals image " />
              <p>{item.title}</p>
              <div className={styles.bottom}>
                <p>₹{item.price}</p>
                <button> Buy Now !</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section5}>
        <img src={sony} alt="sony" />
        <div className={styles.rect}>
          <h3>
            Bluetooth Calling Smartwatch
            <br /> starts at ₹1,999
          </h3>
          <img src={watch} alt="watch" />
          <p>Shop now</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
