import { useEffect, useState } from "react";
import RequestBuilder from "../../../services/RequestBuilder";
import type { Order } from "../../../../Interfaces";

const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const handleGetOrders = async () => {
    const response = await RequestBuilder({
      url: "/orders",
      method: "GET",
    });

    setOrders(response.data);
  };

  useEffect(() => {
    handleGetOrders();
  }, []);

  return {
    orders,
    handleGetOrders,
  };
};

export default useOrders;
