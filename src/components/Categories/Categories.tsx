import chooses from "../../../public/Icons/chooses.svg";
import type { ICategories } from "../../Interfaces";
import styles from "./Categories.module.scss";
const Categories = ({
  categories,
  handleChangeCategoryId,
  categoryId,
}: ICategories) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleChangeCategoryId(category.id)}
          disabled={categoryId === category.id}
          className={
            categoryId === category.id ? styles.activeCategory : styles.category
          }
        >
          {category.name}
        </button>
      ))}
      <img
        onClick={() => handleChangeCategoryId(null)}
        className={styles.chooseIcon}
        src={chooses}
        alt=""
      />
    </div>
  );
};
export default Categories;
