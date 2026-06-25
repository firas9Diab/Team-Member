export interface Address {
  id?: number;
  name: string;
  country: string;
  flatHouseBuilding: string;
  mobileNumber: string;
  alternativeMobileNumber: string;
  pincode: string;
  city: string;
  state: string;
  isDefault?: boolean;
}

export type Mode = "Add" | "Edit" | "View";

export type IAddressForm = {
  address: Address | null;
  mode: Mode;
  setMode: (mode: Mode) => void;
  handleGetAddresses: () => void;
};

export type IViewAddresses = {
  addresses: Address[];
  setSelectedAddress: (address: Address | null) => void;
  setMode: (mode: Mode) => void;
  handleDeleteAddresses: (address: Address) => void;
};

export type MethodType = "GET" | "POST" | "PATCH" | "DELETE";

type ProductType = "today-deals" | "recommended";

type SortBy = "newest" | "price-low" | "price-high" | "rating";

export type ProductParams = {
  search?: string;
  categoryId?: number;
  type?: ProductType;
  sortBy?: SortBy;
  page?: number;
  limit?: number;
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

interface ProductReviewBreakdown {
  [key: string]: number;
}

export interface ProductReviewSummary {
  average: number;
  total: number;
  breakdown: ProductReviewBreakdown;
}

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
  setReviewsCurrentPage: (page: number) => void;
  userIcon: string;
  reviews: ProductReview[];
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

export interface IModal {
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

interface SignInDTO {
  email: string;
  password: string;
}
interface SignUpDTO {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

type ChangeMyDetailsDTO = {
  fullName: string;
  phone: string;
  dateOfBirth: string;
};
export type RequestData =
  | ProductListItemDTO
  | ProductListItemDTO[]
  | ProductDetailsDTO[]
  | Address
  | Address[]
  | SignInDTO
  | SignUpDTO
  | ChangeMyDetailsDTO
  | ProductReview[]
  | AddProductReviewDTO;

export type AddProductReviewDTO = {
  rating: number;
  title: string;
  comment: string;
};
export interface IUseProductReviews {
  id: string | undefined;
}
export type ProductDetailsParams = {
  id: string;
};

export type IRequestBuilder = {
  url: string;
  method?: MethodType;
  data?: RequestData;
  params?: ProductParams | ReviewParams | ProductDetailsParams | undefined;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
};
export interface IPaginationButtons {
  setReviewsCurrentPage: (page: number) => void;
  reviewsCurrentPage: number;
  reviewsTotalPages: number;
}
export type ICategories = {
  categories: Category[];
  handleChangeCategoryId: (categoryId: number | null) => void;
  categoryId: number | null;
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

export type IProduct = {
  card: ProductListItemDTO;
  navigate?: (nav: string) => void;
};

export type INavbar = {
  search?: string;
  setSearch?: (search: string | undefined) => void;
};

export type IProtectedRoute = {
  children: React.ReactNode;
  search?: string;
  setSearch?: (search: string | undefined) => void;
};

export type IHome = {
  search: string | undefined;
};

export type ReviewSortBy =
  | "newest"
  | "oldest"
  | "highest-rating"
  | "lowest-rating";

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

export type FooterCategory = {
  id: string | number;
  title?: string;
  items: string[];
};

export type FooterCategories = FooterCategory[];
