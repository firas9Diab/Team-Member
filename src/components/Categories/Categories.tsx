import styles from "./Categories.module.scss";
import lines from "../../Assets/lines.svg";
import useCategories from "./useCategories";

const Categories = () => {
  const { categories } = useCategories();
  return (
    <>
      <div className={styles.line}>
        {categories.map((category) => (
          <div key={category.id} className={styles.categories}>
            <button className={styles.buttons}>category {category.id}</button>
          </div>
        ))}
        <img src={lines} alt="lines" />
      </div>
    </>
  );
};

export default Categories;
