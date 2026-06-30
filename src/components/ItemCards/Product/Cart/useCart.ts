import { useEffect, useState } from "react";
import RequestBuilder from "../../../services/RequestBuilder";
import Trash from "../../../../../public/Icons/trash.svg";
import type { CartData } from "../../../../Interfaces";
import { useNavigate } from "react-router-dom";

const useCart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [titleCartItem, settitleCartItem] = useState<string>("");
  const [selectedIdByCartItem, setSelectedIdByCartItem] = useState<number>(0);
  const trash: string = Trash;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlechangeIdCartItem = (id: number) => {
    setSelectedIdByCartItem(id);
  };
  const handlechangeTitleCartItem = (titleCartItem: string) => {
    settitleCartItem(titleCartItem);
  };

  const handleAddtoOrders = async () => {
    await RequestBuilder({
      url: `/orders`,
      method: "POST",
    });
    navigate("/Orders");
  };

  const handleDeleteCart = async (selectedIdByCartItem: number) => {
    await RequestBuilder({
      url: `/cart/${selectedIdByCartItem}`,
      method: "DELETE",
    });
    await handleGetCart();
    handleCloseModal();
  };

  const handleGetCart = async () => {
    const response = await RequestBuilder({
      url: "/cart",
      method: "GET",
    });

    setCart(response.data);
  };

  useEffect(() => {
    handleGetCart();
  }, []);

  return {
    cart,
    trash,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    titleCartItem,
    handleDeleteCart,
    selectedIdByCartItem,
    handlechangeIdCartItem,
    handlechangeTitleCartItem,
    handleAddtoOrders,
  };
};

export default useCart;
