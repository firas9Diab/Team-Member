import { useEffect, useState } from "react";
import requestBuilder from "../utility/requestBuilder";
import type { productItems } from "../../interface/interface";
import Card from "../ItemCards/Card/Card";
import styles from "./Products.module.scss";

const Products = ({ search }: { search: string }) => {
  const [products, setProducts] = useState<productItems[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleGetProducts = async () => {
    try {
      const response = await requestBuilder({
        url: `http://localhost:3000/products?search=${search}&page=${page}&limit=10`,
        method: "GET",
      });
      console.log(response.data.items);
      setProducts(response.data.items);
      setTotalPages(response.data.pagination.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, [search, page]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  return (
    <>
      {products.map((product: productItems) => {
        return <Card key={product.id} item={product} />;
      })}

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
