import { useEffect, useState } from "react";
import type { productItems } from "../../interface/interface";
import requestBuilder from "../utility/requestBuilder";

const useProducts = ({ search }: { search: string }) => {
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

  return {
    products,
    page,
    setPage,
    totalPages,
  };
};

export default useProducts;
