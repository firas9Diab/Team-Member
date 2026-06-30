import { useEffect, useState } from "react";
import RequestBuilder from "../../../services/RequestBuilder";
import type { CartData } from "../../../../Interfaces";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const useCart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartData | null>(null);
  const [selectedCartItemTitle, setSelectedCartItemTitle] =
    useState<string>("");
  const [selectedCartItemId, setSelectedCartItemId] = useState<number | null>(
    null,
  );
  const handleSelectCartItem = (id: number) => {
    setSelectedCartItemId(id);
  };
  const handleChangeTitleCartItem = (titleCartItem: string) => {
    setSelectedCartItemTitle(titleCartItem);
  };

  const handleConfirmDeleteCartItem = (id: number, titleCartItem: string) => {
    if (id === null) return;

    handleSelectCartItem(id);
    handleChangeTitleCartItem(titleCartItem);
    handleDeleteCart();
  };

  const handleAddtoOrders = async () => {
    await RequestBuilder({
      url: `/orders`,
      method: "POST",
    });
    navigate("/Orders");
  };

  const handleDeleteCart = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Do you Delete ${selectedCartItemTitle} from your Cart?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
      customClass: {
        confirmButton: "swalConfirmButton",
        cancelButton: "swalCancelButton",
      },
      buttonsStyling: false,
    });
    if (result.dismiss === Swal.DismissReason.cancel) {
      await Swal.fire({
        title: "Cancelled",
        text: "Cart item not deleted",
        icon: "error",

        customClass: {
          confirmButton: "swalCancelOkButton",
        },
        buttonsStyling: false,
      });

      return;
    }

    if (!result.isConfirmed) {
      return;
    }

    await RequestBuilder({
      url: `/cart/${selectedCartItemId}`,
      method: "DELETE",
    });
    await Swal.fire({
      title: "Deleted!",
      text: "Cart item deleted successfully!",
      icon: "success",

      customClass: {
        confirmButton: "swalSuccessButton",
      },
      buttonsStyling: false,
    });
    await handleGetCart();
    setSelectedCartItemId(null);
    setSelectedCartItemTitle("");
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

  return { cart, handleConfirmDeleteCartItem, handleAddtoOrders };
};
export default useCart;
