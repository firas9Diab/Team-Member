import styles from "./Categories.module.scss";
import lines from "../../Assets/lines.svg";
import type { CategoriesProps } from "../../interface/interface";
import { useNavigate } from "react-router-dom";

const Categories = ({ categories, setSelectedCategories }: CategoriesProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.line}>
        {categories.map((category) => (
          <div key={category.id} className={styles.categories}>
            <button
              className={styles.buttons}
              onClick={() => {
                setSelectedCategories(category.id);
                navigate(`/products/${category.id}`);
              }}
            >
              category {category.id}
            </button>
          </div>
        ))}
        <img src={lines} alt="lines" />
      </div>
    </>
  );
};

export default Categories;
