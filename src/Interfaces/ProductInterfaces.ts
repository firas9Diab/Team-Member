export type Category = {
  id: number;
  name: string;
  slug: string;
};

export type ICategories = {
  categories: Category[];
  handleChangeCategoryId: (categoryId: number | null) => void;
  categoryId: number | null;
};

export type ProductType = "today-deals" | "recommended";

export type SortBy = "newest" | "price-low" | "price-high" | "rating";

export type ProductParams = {
  search?: string;
  categoryId?: number;
  type?: ProductType;
  sortBy?: SortBy;
  page?: number;
  limit?: number;
};

export type ProductDetailsParams = {
  id: string;
};

export interface ProductCategory {
  id: number;
  name: string;
}

export interface ProductImage {
  id: number;
  url: string;
  alt: string;
  sortOrder: number;
}

export interface ProductFeature {
  id: number;
  text: string;
}

export interface ProductReviewBreakdown {
  [key: string]: number;
}

export interface ProductReviewSummary {
  average: number;
  total: number;
  breakdown: ProductReviewBreakdown;
}

export interface ProductListItemDTO {
  id: number;
  title: string;
  slug: string;
  price: number;
  oldPrice: number | null;
  discountPercent: number | null;
  ratingAverage: number;
  ratingCount: number;
  image: string;
  category: ProductCategory;
}

export interface ProductDetailsDTO {
  id: number;
  title: string;
  slug: string;
  brand: string;
  description: string;
  price: number;
  oldPrice: number | null;
  discountPercent: number | null;
  stock: number;
  ratingAverage: number;
  ratingCount: number;
  category: ProductCategory;
  images: ProductImage[];
  features: ProductFeature[];
  reviewSummary: ProductReviewSummary;
}

export type IProduct = {
  card: ProductListItemDTO;
  navigate?: (nav: string) => void;
};

export type IItemCards = {
  todayDeals: ProductListItemDTO[];
  moreItemsToConsider: ProductListItemDTO[];
  setCurrentPage: (currentPage: number) => void;
  totalPages: number;
  currentPage: number;
  selectedCategoryId: number | null;
  products: ProductListItemDTO[];
  search: string | undefined;
  showContainer: boolean;
  navigate: (nav: string) => void;
};

export type IProductDetails = {
  selectedProduct: ProductDetailsDTO | null;
  handleChangeImages: (image: ProductImage) => void;
  selectedImage: ProductImage | null;
  productFeatures: ProductFeature[];
  handleAddProductToCart: () => void;
  handleChangeQuantity: (
    e: React.ChangeEvent<HTMLInputElement, Element>,
  ) => void;
  quantity: number;
};
