import { useState, useEffect } from "react";
import RequestBuilder from "../services/RequestBuilder";

const useHome = (search: string | undefined) => {
  const [categories, setCategories] = useState([]);
  const [todayDeals, setTodayDeals] = useState([]);
  const [moreItemsToConsider, setMoreItemsToConsider] = useState([]);
  const [product, setProduct] = useState([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null,
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showContainer, setShowContainer] = useState<boolean>(false);

  const handleChangeCategoryId = (id: number | null) => {
    setSelectedCategoryId(id);
  };
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
    categoryId: null | number = selectedCategoryId,
    searchValue: string | undefined = search,
  ) => {
    const response = await RequestBuilder({
      url: "/products",
      method: "GET",
      params: {
        search: searchValue || undefined,
        categoryId: categoryId ?? undefined,
        page,
        limit: 5,
      },
    });

    const mapped = response.data.items;

    setProduct(mapped);
    setTotalPages(response.data.pagination.totalPages);
  };

  useEffect(() => {
    handleGetHome();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    setShowContainer(!selectedCategoryId && !search);
  }, [selectedCategoryId, search]);

  useEffect(() => {
    const hasSearch = search && search.trim() !== "";
    const hasSelectedCategory = selectedCategoryId !== null;
    if (!hasSearch && !hasSelectedCategory) {
      setProduct([]);
      setTotalPages(1);
      return;
    }

    handleGetProduct(currentPage, selectedCategoryId, search);
  }, [currentPage, selectedCategoryId, search]);
  return {
    categories,
    moreItemsToConsider,
    todayDeals,
    handleChangeCategoryId,
    setCurrentPage,
    currentPage,
    totalPages,
    selectedCategoryId,
    product,
    showContainer,
  };
};

export default useHome;
