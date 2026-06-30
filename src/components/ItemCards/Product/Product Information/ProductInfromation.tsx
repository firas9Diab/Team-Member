import ProductDetails from "./Product Details/ProductDetails";
import ProductReviews from "../Product Reviews/ProductReviews";
import useProjectInfromation from "./useProductInfromation";
import Footer from "../../../../Footer/Footer";

const ProjectInfromation = () => {
  const {
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
  } = useProjectInfromation();

  return (
    <>
      <ProductDetails
        selectedProduct={selectedProduct}
        handleChangeImages={handleChangeImages}
        selectedImage={selectedImage}
        productFeatures={productFeatures}
        handleAddProductToCart={handleAddProductToCart}
        quantity={quantity}
        handleChangeQuantity={handleChangeQuantity}
      />
      <ProductReviews
        handleGetProductDetails={handleGetProductDetails}
        selectedProduct={selectedProduct}
        handleCalculateRatingPercentage={handleCalculateRatingPercentage}
        id={id}
      />
      <Footer />
    </>
  );
};

export default ProjectInfromation;
