import { useEffect, useState } from "react";
import type { ProductDto } from "../../interface/interface";
import requestBuilder from "../utility/requestBuilder";

const useProducts = ({
  search,
  selectedCategories,
}: {
  search: string;
  selectedCategories: number;
}) => {
  const [products, setProducts] = useState<ProductDto[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleGetProducts = async () => {
    try {
      const response = await requestBuilder({
        url: `http://localhost:3000/products?search=${search}&page=${page}&limit=8&categoryId=${selectedCategories}`,
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
  }, [search, page, selectedCategories]);

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
