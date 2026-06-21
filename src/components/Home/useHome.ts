import { useState, useEffect } from "react";
import RequestBuilder from "../services/RequestBuilder";

const useHome = () => {
  const [categories, setCategories] = useState([]);
  const [todayDeals, setTodayDeals] = useState([]);
  const [moreItemsToConsider, setMoreItemsToConsider] = useState([]);

  const handleGetHome = async () => {
    const response = await RequestBuilder({
      url: "/home",
      method: "GET",
    });

    setCategories(response.data.categories);
    setTodayDeals(response.data.todayDeals);
    setMoreItemsToConsider(response.data.moreItemsToConsider);
  };

  useEffect(() => {
    handleGetHome();
  }, []);
  return { categories, moreItemsToConsider, todayDeals };
};

export default useHome;
