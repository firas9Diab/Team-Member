import useHome from "../Hooks/useHome";
import Categories from "../Categories/Categories";
import styles from "./Home.module.scss";
import sony from "../../Assets/sony.png";
import watch from "../../Assets/watch.png";
import Footer from "../Footer/Footer";
import ItemCards from "../ItemCards/ItemCards";
import Products from "../Products/Products";
import type { IHome } from "../../interface/interface";

const Home = ({ search }: IHome) => {
  const {
    todaysDeals,
    moreItems,
    categories,
    selectedCategories,
    showSearch,
    handleCategorychange,
  } = useHome({ search });

  return (
    <>
      {showSearch ? (
        <div>
          <Products
            search={search}
            selectedCategories={selectedCategories}
            handleCategorychange={handleCategorychange}
            categories={categories}
          />
          <Footer />
        </div>
      ) : (
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
          <Categories
            categories={categories}
            handleCategorychange={handleCategorychange}
          />

          <div className={styles.section3}>
            <div className={styles.title}>
              <h1>Today’s </h1>
              <h1 className={styles.underline}>Deals</h1>
            </div>
            <ItemCards todaysDeals={todaysDeals} moreItems={moreItems} />
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
      )}
    </>
  );
};

export default Home;
