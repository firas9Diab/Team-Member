import { useState, useEffect } from "react";
import RequestBuilder from "../services/RequestBuilder";

const useHome = (search: string | undefined) => {
  const [categories, setCategories] = useState([]);
  const [todayDeals, setTodayDeals] = useState([]);
  const [moreItemsToConsider, setMoreItemsToConsider] = useState([]);
  const [product, setProduct] = useState([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [selectedcategoryId, setSelectedCategoryId] = useState<number | null>(
    null,
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleGetHome = async () => {
    const response = await RequestBuilder({
      url: "/home",
      method: "GET",
    });
    setCategories(response.data.categories);
    setTodayDeals(response.data.todayDeals);
    setMoreItemsToConsider(response.data.moreItemsToConsider);
  };

  const handleGetProduct = async (
    page: number = 1,
    categoryId: null | number = selectedcategoryId,
    searchValue: string | undefined = search,
  ) => {
    const response = await RequestBuilder({
      url: "/products",
      method: "GET",
      params: {
        search: searchValue || undefined,
        categoryId,
        page: page,
        limit: 5,
      },
    });

    const mapped = response.data.items;
    console.log(mapped);
    setProduct(mapped);
    setTotalPages(response.data.pagination.totalPages);
  };

  useEffect(() => {
    handleGetHome();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedcategoryId, search]);

  useEffect(() => {
    handleGetProduct(currentPage, selectedcategoryId, search);
  }, [currentPage, selectedcategoryId, search]);
  return {
    categories,
    moreItemsToConsider,
    todayDeals,
    setSelectedCategoryId,
    setCurrentPage,
    currentPage,
    totalPages,
    selectedcategoryId,
    product,
    search,
  };
};

export default useHome;
