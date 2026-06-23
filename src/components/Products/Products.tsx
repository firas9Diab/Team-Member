import type { ProductDto, IProductItems } from "../../interface/interface";
import styles from "./Products.module.scss";
import useProducts from "./useProducts";
import Categories from "../Categories/Categories";
import Card from "../ItemCards/Card/Card";
import Footer from "../Footer/Footer";

const Products = ({
  search,
  selectedCategories,
  categories,
  handleCategorychange,
}: IProductItems) => {
  const { products, page, setPage, totalPages } = useProducts({
    search,
    selectedCategories,
  });

  return (
    <>
      <Categories
        categories={categories}
        handleCategorychange={handleCategorychange}
      />

      {products.length === 0 ? (
        <h3 className={styles.empty}>no products</h3>
      ) : (
        <div>
          <div className={styles.card}>
            {products.map((product: ProductDto) => {
              return <Card key={product.id} Product={product} />;
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
        </div>
      )}
      <Footer />
    </>
  );
};

export default Products;
