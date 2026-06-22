import chooses from "../../../public/Icons/chooses.svg";
import type { CategoryProps } from "../interface";
import styles from "./Categories.module.scss";

const Categories = ({ categories,setCategoryId }: CategoryProps) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <button onClick={()=>setCategoryId(Number(category.id))} key={category.id} className={styles.category}>
          {category.name}
        </button>
      ))}

      <img src={chooses} alt="" />
    </div>
  );
};

export default Categories;
