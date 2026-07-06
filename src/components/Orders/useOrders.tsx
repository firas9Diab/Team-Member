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

      const updatedOrders = response.data.map((order: any) => ({
        ...order,
        customerLocation: {
          latitude: 31.9539,
          longitude: 35.9106,
        },
      }));

      setOrders(updatedOrders);
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
