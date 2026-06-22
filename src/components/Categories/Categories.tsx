import chooses from "../../../public/Icons/chooses.svg";
import type { ICategories } from "../interface";
import styles from "./Categories.module.scss";

const Categories = ({ categories, setCategoryId, categoryId }: ICategories) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setCategoryId(category.id)}
          disabled={categoryId === category.id}
          className={
            categoryId === category.id ? styles.activecategory : styles.category
          }
        >
          {category.name}
        </button>
      ))}

      <img src={chooses} alt="" />
    </div>
  );
};

export default Categories;
