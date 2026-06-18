import styles from "./Categories.module.scss";
import lines from "../../Assets/lines.svg";
import type { CategoriesProps } from "../../interface/interface";

const Categories = ({ categories }: CategoriesProps) => {
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
