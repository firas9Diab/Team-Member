import ProductDetails from './Product Details/ProductDetails'
import ProductReviews from '../Product Reviews/ProductReviews';
import useProjectInfromation from './useProductInfromation';

const ProjectInfromation = () => {
  const {
    selectedProduct,
    selectedImage,
    handleCalculateRatingPercentage,
    productFeatures,
    id,
    handleGetProductDetails,handleChangeImages
  } = useProjectInfromation();

  return (<>
 <ProductDetails
        selectedProduct={selectedProduct}
        handleChangeImages={handleChangeImages}
        selectedImage={selectedImage}
        productFeatures={productFeatures}
      />
<ProductReviews
        handleGetProductDetails={handleGetProductDetails}
        selectedProduct={selectedProduct}
        handleCalculateRatingPercentage={handleCalculateRatingPercentage}
        id={id}
      />
      </>
)
}

export default ProjectInfromation