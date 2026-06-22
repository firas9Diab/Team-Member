import chooses from "../../../public/Icons/chooses.svg";
import type { ICategories } from "../interface";
import styles from "./Categories.module.scss";

const Categories = ({ categories }: ICategories) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <button key={category.id} className={styles.category}>
          {category.name}
        </button>
      ))}

      <img src={chooses} alt="" />
    </div>
  );
};

export default Categories;
