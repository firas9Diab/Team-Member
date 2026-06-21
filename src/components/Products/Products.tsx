import type { productItems } from "../../interface/interface";
import styles from "./Products.module.scss";
import useProducts from "./useProducts";
import useHome from "../Hooks/useHome";
import Categories from "../Categories/Categories";

const Products = ({
  search,
  selectedCategories,
  setSelectedCategories,
}: {
  search: string;
  selectedCategories: number;
  setSelectedCategories: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { categories } = useHome();

  const { products, page, setPage, totalPages } = useProducts({
    search,
    selectedCategories,
  });

  return (
    <>
      <Categories
        categories={categories}
        setSelectedCategories={setSelectedCategories}
      />
      <div className={styles.card}>
        {products.map((product: productItems) => {
          return (
            <div className={styles.deals}>
              <img src={product.image} alt=" deals image " />
              <p>{product.title}</p>
              <div className={styles.bottom}>
                <p>₹{product.price}</p>
                <button> Buy Now !</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.pagination}>
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </button>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Products;
