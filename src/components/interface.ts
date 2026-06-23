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

export type Mode = "Add" | "Edit" | "view";

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

export interface ProductDTO {
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
  | ProductDTO
  | ProductDTO[]
  | Address
  | Address[]
  | SignInDTO
  | SignUpDTO
  | ChangeMyDetailsDTO;

export type IRequestBuilder = {
  url: string;
  method?: MethodType;
  data?: RequestData;
  params?: ProductParams | undefined;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
};

export type ICategories = {
  categories: Category[];
  setCategoryId: (categoryId: number | null) => void;
  categoryId: number | null;
};

export type IItemCards = {
  todayDeals: ProductDTO[];
  moreItemsToConsider: ProductDTO[];
  setCurrentPage: (currentPage: number) => void;
  totalPages: number;
  currentPage: number;
  selectedCategoryId: number | null;
  products: ProductDTO[];
  search: string | undefined;
  show: boolean;
};

export type IProduct = {
  card: ProductDTO;
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
