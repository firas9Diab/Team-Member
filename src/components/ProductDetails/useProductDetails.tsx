import { useEffect, useState } from "react";
import type {
  ProductDetailsDto,
  ProductReviewsDto,
} from "../../interface/interface";
import requestBuilder from "../utility/requestBuilder";
import { useParams } from "react-router-dom";

const useProductDetails = () => {
  const [productDetails, setProductDetails] =
    useState<ProductDetailsDto | null>(null);
  const [reviews, setReviews] = useState<ProductReviewsDto | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [rating, setRating] = useState<number>(5);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [selectedImg, setSelectedImg] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  const { id } = useParams();

  const handleRatingChange = (value: string) => {
    setRating(Number(value));
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
  };

  const handleCommentChange = (value: string) => {
    setComment(value);
  };

  const handleSelectedImgChange = (value: number) => {
    setSelectedImg(value);
  };

  const starRating = [1, 2, 3, 4, 5];

  const starBar = [5, 4, 3, 2, 1];

  const getProductsDetails = async () => {
    try {
      const response = await requestBuilder({
        url: `http://localhost:3000/products/${id}`,
        method: "GET",
      });
      setProductDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const getReviews = async () => {
    try {
      const response = await requestBuilder({
        url: `http://localhost:3000/products/${id}/reviews?page=${page}&limit=10`,
        method: "GET",
      });
      console.log(response.data);
      setReviews(response.data);
      setTotalPages(response.data.pagination.totalPages);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const postReviews = async () => {
    try {
      await requestBuilder({
        url: `http://localhost:3000/products/${id}/reviews`,
        method: "POST",
        data: {
          rating,
          title,
          comment,
        },
      });
      setShowReviewForm(false);
      handleTitleChange("");
      handleCommentChange("");
      handleRatingChange("5");

      getReviews();
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getProductsDetails();
    getReviews();
  }, [id, page]);

  return {
    productDetails,
    reviews,
    page,
    setPage,
    totalPages,
    handleRatingChange,
    handleTitleChange,
    handleCommentChange,
    rating,
    title,
    comment,
    setShowReviewForm,
    showReviewForm,
    postReviews,
    selectedImg,
    handleSelectedImgChange,
    hoveredStar,
    setHoveredStar,
    starRating,
    starBar,
  };
};

export default useProductDetails;
