import { useEffect, useState } from "react";
import RequestBuilder from "../../../services/RequestBuilder";
import type {
  ProductReview,
  ProductReviewSummary,
  IUseProductReviews,
} from "../../../../Interfaces";
import UserIcon from "../../../../../public/icons/UserIcon.svg";

const useProductReviews = ({ id }: IUseProductReviews) => {
  const [reviews, setReviews] = useState<ProductReview[]>([]);
  const [productReviewSummary, setProductReviewSummary] =
    useState<ProductReviewSummary | null>(null);
  const userIcon: string = UserIcon;
  const [reviewsTotalPages, setReviewsTotalPages] = useState<number>(1);
  const [reviewsCurrentPage, setReviewsCurrentPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleGetProductReviews = async (
    page: number = 1,
    productId: string | undefined = id,
  ) => {
    if (!productId) return;
    const response = await RequestBuilder({
      url: `/products/${productId}/reviews`,
      method: "GET",
      params: {
        page,
        limit: 2,
      },
    });
    setReviews(response.data.items);
    setProductReviewSummary(response.data.summary);
    setReviewsTotalPages(response.data.pagination.totalPages);
  };
  const handleChangeReviewsCurrentPage = (page: number) => {
    setReviewsCurrentPage(page);
  };
  useEffect(() => {
    setReviewsCurrentPage(1);
  }, [id]);
  useEffect(() => {
    if (!id) return;
    handleGetProductReviews(reviewsCurrentPage, id);
  }, [id, reviewsCurrentPage]);
  return {
    reviews,
    productReviewSummary,
    reviewsTotalPages,
    reviewsCurrentPage,
    handleChangeReviewsCurrentPage,
    userIcon,
    isModalOpen,
    setIsModalOpen,
    handleGetProductReviews,
  };
};
export default useProductReviews;
