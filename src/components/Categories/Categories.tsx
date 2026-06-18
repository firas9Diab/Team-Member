import styles from "./Categories.module.scss";
import lines from "../../Assets/lines.svg";
import type { ICategories } from "../../interface/interface";

const Categories = ({ categories }: { categories: ICategories[] }) => {
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
