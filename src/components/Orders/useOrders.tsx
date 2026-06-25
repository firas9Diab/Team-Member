import { useEffect, useState } from "react";
import type { OrderDto } from "../../interface/interface";
import requestBuilder from "../utility/requestBuilder";

const useOrders = () => {
  const [orders, setOrders] = useState<OrderDto[]>([]);

  const getOrders = async () => {
    try {
      const response = await requestBuilder({
        url: "http://localhost:3000/orders",
        method: "GET",
      });
      setOrders(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return { orders };
};

export default useOrders;
