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
    handleChangeCategoryId,
    setCurrentPage,
    currentPage,
    totalPages,
    selectedCategoryId,
    product,
    showContainer,
    navigate,
  } = useHome(search);
  return (
    <div className={styles.containers}>
      {showContainer && (
        <div className={styles.fashionSale}>
          <p className={styles.fashionSaleTitle}>#Big Fashion Sale</p>

          <h1 className={styles.fashionSaleOffer}>
            Limited Time Offer! <br /> Up to 50% OFF!
          </h1>

          <p className={styles.fashionSaleDescription}>
            Redefine Your Everyday Style
          </p>
        </div>
      )}

      <div className={styles.categories}>
        <Categories
          categories={categories}
          handleChangeCategoryId={handleChangeCategoryId}
          categoryId={selectedCategoryId}
        />
      </div>

      <ItemCards
        todayDeals={todayDeals}
        moreItemsToConsider={moreItemsToConsider}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        currentPage={currentPage}
        selectedCategoryId={selectedCategoryId}
        products={product}
        search={search}
        showContainer={showContainer}
        navigate={navigate}
      />

      {showContainer && (
        <div className={styles.ads}>
          <div className={styles.inner}>
            <img src={sony} alt="" className={styles.sonyImage} />

            <div className={styles.bluetoothSwitch}>
              <div>Bluetooth Calling Smartwatch starts at ₹1,999</div>

              <img
                src={bluetoothswitch}
                alt=""
                className={styles.bluetoothSwitchImage}
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
