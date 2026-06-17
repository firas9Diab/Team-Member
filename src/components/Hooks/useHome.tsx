import { useState, useEffect } from "react";
import requestBuilder from "../utility/requestBuilder";
import type { TodaysDeals } from "../../interface/interface";

const useHome = () => {
  const [userData, setUserData] = useState("");
  const [todaysDeals, setTodaysDeals] = useState<TodaysDeals[]>([]);
  const [moreItems, setMoreItems] = useState<TodaysDeals[]>([]);

  const getUsers = async () => {
    try {
      const response = await requestBuilder({
        url: "http://localhost:3000/auth/me",
        method: "GET",
      });

      setUserData(response.data.data);
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
      console.log(response.data.data.todayDeals);
      setTodaysDeals(response.data.data.todayDeals);
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
      console.log(response.data.data.moreItemsToConsider);
      setMoreItems(response.data.data.moreItemsToConsider);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
    getTodaysDeals();
    getMoreItems();
  }, []);

  return {
    userData,
    getUsers,
    todaysDeals,
    moreItems,
  };
};

export default useHome;
