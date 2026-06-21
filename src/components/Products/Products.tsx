import type { productItems } from "../../interface/interface";
import styles from "./Products.module.scss";
import useProducts from "./useProducts";

const Products = ({
  search,
  selectedCategories,
}: {
  search: string;
  selectedCategories: number;
}) => {
  const { products, page, setPage, totalPages } = useProducts({
    search,
    selectedCategories,
  });

  return (
    <>
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
