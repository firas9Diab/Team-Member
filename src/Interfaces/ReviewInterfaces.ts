import type { ProductDetailsDTO } from "./ProductInterfaces";
export type ReviewSortBy =
  "newest" | "oldest" | "highest-rating" | "lowest-rating";
export type ReviewParams = {
  rating?: number;
  sortBy?: ReviewSortBy;
  page?: number;
  limit?: number;
};
export interface ProductReview {
  id: number;
  reviewerName: string;
  rating: number;
  title: string;
  comment: string;
  isVerified: boolean;
  createdAt: string;
}
export type AddProductReviewDTO = {
  rating: number;
  title: string;
  comment: string;
};
export interface IProductReviews {
  selectedProduct: ProductDetailsDTO | null;
  handleCalculateRatingPercentage: (rating: number) => number;
  id: string | undefined;
  handleGetProductDetails: (id: string) => void;
}
export interface IProductComments {
  id: string | undefined;
  reviewsTotalPages: number;
  reviewsCurrentPage: number;
  handleChangeReviewsCurrentPage: (page: number) => void;
  userIcon: string;
  reviews: ProductReview[];
}
export interface IAddProductReview {
  id: string | undefined;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  handleGetProductReviews: (page: number, id: string) => void;
  handleGetProductDetails: (id: string) => void;
}
export interface IUseAddProductReview {
  id: string | undefined;
  handleGetProductReviews: (page: number, id: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  handleGetProductDetails: (id: string) => void;
}
export interface IUseProductReviews {
  id: string | undefined;
}
export interface IAddProductReviewForm {
  handleCloseModal: () => void;
  handleAddProductReview: () => void;
  handleChangeform: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  setRating: (rating: number) => void;
  rating: number;
  title: string;
  comment: string;
}
