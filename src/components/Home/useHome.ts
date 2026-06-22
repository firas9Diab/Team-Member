import { useState, useEffect } from "react";
import RequestBuilder from "../services/RequestBuilder";

const useHome = () => {
  const [categories, setCategories] = useState([]);
  const [todayDeals, setTodayDeals] = useState([]);
  const [moreItemsToConsider, setMoreItemsToConsider] = useState([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [currentPage, setcurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

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
    page: number=1,
    categoryId: null | number,
    searchValue: string = search
  ) => {
    const response = await RequestBuilder({
      url: "/products",
      method: "GET",
      params: {
        search: searchValue || undefined,
        categoryId: categoryId,
        page:page,
        limit: 5,
      },
    });

    setTotalPages(response.data.pagination.totalPages);
    console.log(response.data);
  };

  useEffect(() => {
    handleGetHome();
    handleGetProduct();
  }, []);


    useEffect(() => {
    setcurrentPage(1);
  }, [categoryId, search]);

    useEffect(() => {
    handleGetProduct(currentPage, categoryId, search);
  }, [currentPage, categoryId, search]);

  return { categories, moreItemsToConsider, todayDeals,setCategoryId };
};

export default useHome;
