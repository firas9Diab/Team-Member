import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RequestBuilder from "../../../services/RequestBuilder";
import type {
  ProductDetailsDTO,
  ProductDetailsParams,
  ProductFeature,
  ProductImage,
  ProductReviewSummary,
} from "../../../../Interfaces/ProductInterfaces";

const useProjectInfromation = () => {
  const navigate = useNavigate();
  const { id } = useParams<ProductDetailsParams>();
  const [selectedImage, setSelectedImage] = useState<ProductImage | null>(null);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductDetailsDTO | null>(null);
  const [productFeatures, setProductFeatures] = useState<ProductFeature[]>([]);
  const [productReviewSummary, setProductReviewSummary] =
    useState<ProductReviewSummary | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };
  const handleCalculateRatingPercentage = (key: number) => {
    return (
      ((productReviewSummary?.breakdown[`${key}`] || 0) /
        (productReviewSummary?.total || 1)) *
      100
    );
  };
  const handleChangeImages = (image: ProductImage | null) => {
    setSelectedImage(image);
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
  const handleAddProductToCart = async () => {
    await RequestBuilder({
      url: `/cart`,
      data: { productId: Number(id), quantity },
      method: "POST",
    });
    navigate("/Cart");
  };
  useEffect(() => {
    if (!id) return;
    handleGetProductDetails(id);
  }, [id]);
  return {
    selectedProduct,
    selectedImage,
    handleCalculateRatingPercentage,
    productFeatures,
    id,
    handleGetProductDetails,
    handleChangeImages,
    handleAddProductToCart,
    quantity,
    handleChangeQuantity,
  };
};
export default useProjectInfromation;
