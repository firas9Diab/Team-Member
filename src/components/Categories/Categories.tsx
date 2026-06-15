import { useEffect, useState } from "react";
import requestBuilder from "../utility/requestBuilder";
import styles from "./Categories.module.scss";
import lines from "../../Assets/lines.svg";

interface categories {
  id: number;
  name: string;
  slug: string;
}
const Categories = () => {
  const [categories, setCategories] = useState<categories[]>([]);

  const handleCategories = async () => {
    try {
      const response = await requestBuilder({
        url: "http://localhost:3000/categories",
        method: "GET",
      });
      console.log(response.data);
      setCategories(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    handleCategories();
  }, []);

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
