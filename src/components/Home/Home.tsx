import styles from "./Home.module.scss";
import Categories from "../Categories/Categories";
import useHome from "./useHome";
import ItemCards from "../ItemCards/ItemCards";
import sony from "../../../public/Icons/sony-ad.svg";
import bluetoothswitch from "../../../public/Icons/bluetoothswitch.svg";
import Footer from "../../Footer/Footer";
import type { IHome } from "../interface";

const Home = ({ search }: IHome) => {
  const {
    categories,
    moreItemsToConsider,
    todayDeals,
    setSelectedCategoryId,
    setCurrentPage,
    currentPage,
    totalPages,
    selectedcategoryId,
    product,
    show,
  } = useHome(search);
  return (
    <div className={styles.containers}>
      {show && (
        <div className={styles.fashinsale}>
          <p className={styles.fashinsaleparegraph}>#Big Fashion Sale</p>

          <h1 className={styles.fashinsaleheader1}>
            Limited Time Offer! <br /> Up to 50% OFF!
          </h1>

          <p className={styles.fashinsaleparegraph}>
            Redefine Your Everyday Style
          </p>
        </div>
      )}

      <div className={styles.Categories}>
        <Categories
          categories={categories}
          setCategoryId={setSelectedCategoryId}
          categoryId={selectedcategoryId}
        />
      </div>
      <ItemCards
        todayDeals={todayDeals}
        moreItemsToConsider={moreItemsToConsider}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        currentPage={currentPage}
        selectedcategoryId={selectedcategoryId}
        products={product}
        search={search}
        show={show}
      />
      {show && (
        <div className={styles.ads}>
          <div className={styles.inner}>
            <img src={sony} alt="" className={styles.sonyimage} />
            <div className={styles.bluetoothswitch}>
              <div>Bluetooth Calling Smartwatch starts at ₹1,999</div>
              <img
                src={bluetoothswitch}
                alt=""
                className={styles.bluetoothswitchimage}
              />
              <div>Shop now</div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;
