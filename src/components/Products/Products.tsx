import type {
  productItems,
  productItemsProps,
} from "../../interface/interface";
import styles from "./Products.module.scss";
import useProducts from "./useProducts";
import Categories from "../Categories/Categories";
import Card from "../ItemCards/Card/Card";

const Products = ({
  search,
  selectedCategories,
  setSelectedCategories,
  categories,
}: productItemsProps) => {
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
          return <Card item={product} />;
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
