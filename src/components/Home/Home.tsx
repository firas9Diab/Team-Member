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
  } = useHome(search);

  return (
    <div className={styles.container}>
      {!selectedcategoryId && (
        <div className={styles.container1}>
          <p className={styles.pcontainer1}>#Big Fashion Sale</p>

          <h1 className={styles.h1container1}>
            Limited Time Offer! <br /> Up to 50% OFF!
          </h1>

          <p className={styles.pcontainer1}>Redefine Your Everyday Style</p>
        </div>
      )}

      <div className={styles.container2}>
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
      />
      {!selectedcategoryId && (
        <div className={styles.container5}>
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
