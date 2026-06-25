import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RequestBuilder from "../../../../services/RequestBuilder";
import type {
  ProductDetailsDTO,
  ProductDetailsParams,
  ProductFeature,
  ProductImage,
  ProductReviewSummary,
} from "../../../../interface";

const useProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState<ProductImage | null>(null);
  const { id } = useParams<ProductDetailsParams>();
  const [selectedProduct, setSelectedProduct] =
    useState<ProductDetailsDTO | null>(null);
  const [productFeatures, setProductFeatures] = useState<ProductFeature[]>([]);
  const [productReviewSummary, setProductReviewSummary] =
    useState<ProductReviewSummary | null>(null);

  const handleCalculateRatingPercentage = (key: number) => {
    return (
      ((productReviewSummary?.breakdown[`${key}`] || 0) /
        (productReviewSummary?.total || 1)) *
      100
    );
  };

  const handleGetProductDetails = async (id: string) => {
    const response = await RequestBuilder({
      url: `/products/${id}`,
      method: "GET",
    });

    setSelectedProduct(response.data);
    setSelectedImage(response.data.images[0]);
    setProductFeatures(response.data.features);
    setProductReviewSummary(response.data.reviewSummary);
  };

  useEffect(() => {
    if (!id) return;
    handleGetProductDetails(id);
  }, [id]);

  return {
    selectedProduct,
    selectedImage,
    handleCalculateRatingPercentage,
    setSelectedImage,
    productFeatures,
    id,
    handleGetProductDetails,
  };
};

export default useProductDetails;
