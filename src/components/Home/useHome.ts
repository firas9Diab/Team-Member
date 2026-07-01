import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RequestBuilder from "../services/RequestBuilder";
import type {
  Category,
  ProductListItemDTO,
} from "../../Interfaces/ProductInterfaces";

const useHome = (search: string | undefined) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [todayDeals, setTodayDeals] = useState<ProductListItemDTO[]>([]);
  const [moreItemsToConsider, setMoreItemsToConsider] = useState<
    ProductListItemDTO[]
  >([]);
  const [products, setProducts] = useState<ProductListItemDTO[]>([]);
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
    const hasSearch = searchValue && searchValue.trim() !== "";
    const hasSelectedCategory = categoryId !== null;
    if (!hasSearch && !hasSelectedCategory) {
      setProducts([]);
      setTotalPages(1);
      return;
    }
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
    setProducts(mapped);
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
    products,
    showContainer,
    navigate,
  };
};
export default useHome;
