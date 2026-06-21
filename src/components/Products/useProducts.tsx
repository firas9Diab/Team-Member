import { useEffect, useState } from "react";
import type { productItems } from "../../interface/interface";
import requestBuilder from "../utility/requestBuilder";

const useProducts = ({
  search,
  selectedCategories,
  categoryId,
}: {
  search: string;
  selectedCategories: number;
  categoryId?: string;
}) => {
  const [products, setProducts] = useState<productItems[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleGetProducts = async () => {
    try {
      const response = await requestBuilder({
        url: `http://localhost:3000/products?categoryId=${categoryId || selectedCategories}&search=${search}&page=${page}&limit=8`,
        method: "GET",
      });
      setProducts(response.data.items);
      setTotalPages(response.data.pagination.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, [search, page, selectedCategories, categoryId]);

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
