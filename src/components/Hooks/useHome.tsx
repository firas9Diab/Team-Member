import { useState, useEffect } from "react";
import requestBuilder from "../utility/requestBuilder";
import type { moreItems, TodaysDeals } from "../../interface/interface";
import type { Categories } from "../../interface/interface";

const useHome = () => {
  const [userData, setUserData] = useState("");
  const [todaysDeals, setTodaysDeals] = useState<TodaysDeals[]>([]);
  const [moreItems, setMoreItems] = useState<moreItems[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [selectedCategories, setSelectedCategories] = useState(Number);

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

  const getDeals = async () => {
    try {
      const response = await requestBuilder({
        url: "http://localhost:3000/home",
        method: "GET",
      });
      setTodaysDeals(response.data.todayDeals);
      setMoreItems(response.data.moreItemsToConsider);
      setCategories(response.data.categories);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
    getDeals();
  }, []);

  return {
    userData,
    getUsers,
    todaysDeals,
    moreItems,
    categories,
    setSelectedCategories,
    selectedCategories,
  };
};

export default useHome;
