import { useEffect, useState } from "react";
import requestBuilder from "../utility/requestBuilder";
import type { CartItemDto, Star } from "../../interface/interface";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const useCart = () => {
  const [cart, setCart] = useState<CartItemDto[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const starRating: readonly Star[] = [1, 2, 3, 4, 5];

  const navigate = useNavigate();

  const getCart = async () => {
    try {
      const response = await requestBuilder({
        url: "http://localhost:3000/cart",
        method: "GET",
      });
      setCart(response.data.items);
      setSubtotal(response.data.subtotal);
      setTotal(response.data.totalItems);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const Delete = async (id: number) => {
    try {
      await requestBuilder({
        url: `http://localhost:3000/cart/${id}`,
        method: "DELETE",
      });

      getCart();
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const AddToOrder = async () => {
    try {
      await requestBuilder({
        url: "http://localhost:3000/orders",
        method: "POST",
        data: {},
      });

      Swal.fire({
        icon: "success",
        title: "Order placed successfully",
      });
      navigate("/Orders");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed!",
      });
      console.error(error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return { cart, starRating, total, subtotal, Delete, AddToOrder };
};

export default useCart;
