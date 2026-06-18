import { useState, useEffect } from "react";
import requestBuilder from "../utility/requestBuilder";
import type { ImoreItems, ITodaysDeals } from "../../interface/interface";
import type { ICategories } from "../../interface/interface";

const useHome = () => {
  const [userData, setUserData] = useState("");
  const [todaysDeals, setTodaysDeals] = useState<ITodaysDeals[]>([]);
  const [moreItems, setMoreItems] = useState<ImoreItems[]>([]);
  const [categories, setCategories] = useState<ICategories[]>([]);

  const getUsers = async () => {
    try {
      const response = await requestBuilder({
        url: "http://localhost:3000/auth/me",
        method: "GET",
      });

      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const getTodaysDeals = async () => {
    try {
      const response = await requestBuilder({
        url: "http://localhost:3000/home",
        method: "GET",
      });
      setTodaysDeals(response.data.todayDeals);
    } catch (error) {
      console.error(error);
    }
  };

  const getMoreItems = async () => {
    try {
      const response = await requestBuilder({
        url: "http://localhost:3000/home",
        method: "GET",
      });
      setMoreItems(response.data.moreItemsToConsider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategories = async () => {
    try {
      const response = await requestBuilder({
        url: "http://localhost:3000/categories",
        method: "GET",
      });
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
    getTodaysDeals();
    getMoreItems();
    handleCategories();
  }, []);

  return {
    userData,
    getUsers,
    todaysDeals,
    moreItems,
    categories,
  };
};

export default useHome;
