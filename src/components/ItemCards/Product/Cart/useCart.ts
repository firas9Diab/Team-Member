import { useEffect, useState } from "react";
import RequestBuilder from "../../../services/RequestBuilder";
import type { CartData } from "../../../../Interfaces";
import { useNavigate } from "react-router-dom";

const useCart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartData | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const [selectedCartItemTitle, setSelectedCartItemTitle] =
    useState<string>("");

  const [selectedCartItemId, setSelectedCartItemId] = useState<number | null>(
    null,
  );

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };
  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleSelectCartItem = (id: number) => {
    setSelectedCartItemId(id);
  };
  const handlechangeTitleCartItem = (titleCartItem: string) => {
    setSelectedCartItemTitle(titleCartItem);
  };

  const handleConfirmDeleteCartItem = () => {
    if (selectedCartItemId === null) return;

    handleDeleteCart(selectedCartItemId);
  };

  const handleAddtoOrders = async () => {
    await RequestBuilder({
      url: `/orders`,
      method: "POST",
    });
    navigate("/Orders");
  };

  const handleDeleteCart = async (cartItemId: number) => {
    await RequestBuilder({
      url: `/cart/${cartItemId}`,
      method: "DELETE",
    });

    await handleGetCart();
    handleCloseDeleteModal();
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
    isDeleteModalOpen,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    selectedCartItemTitle,
    handleConfirmDeleteCartItem,
    handleSelectCartItem,
    handlechangeTitleCartItem,
    handleAddtoOrders,
  };
};

export default useCart;
