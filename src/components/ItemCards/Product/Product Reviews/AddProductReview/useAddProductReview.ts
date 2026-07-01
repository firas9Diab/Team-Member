import { useState } from "react";
import RequestBuilder from "../../../../services/RequestBuilder";
import type { IUseAddProductReview } from "../../../../../Interfaces/ReviewInterfaces";

const useAddProductReview = ({
  id,
  handleGetProductReviews,
  isModalOpen,
  setIsModalOpen,
  handleGetProductDetails,
}: IUseAddProductReview) => {
  const [rating, setRating] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const handleChangeform = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "comment":
        setComment(value);
        break;
      default:
        break;
    }
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleAddProductReview = async () => {
    if (!id) return;
    await RequestBuilder({
      url: `/products/${id}/reviews`,
      method: "POST",
      data: {
        rating,
        title,
        comment,
      },
    });
    setRating(0);
    setTitle("");
    setComment("");
    handleCloseModal();
    await handleGetProductReviews(1, id);
    await handleGetProductDetails(id);
  };

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    handleAddProductReview,
    handleChangeform,
    setRating,
    title,
    comment,
    rating,
  };
};
export default useAddProductReview;
