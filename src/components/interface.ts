export interface Address {
  id: number;
  name: string;
  country: string;
  flatHouseBuilding: string;
  mobileNumber: string;
  alternativeMobileNumber: string;
  pincode: string;
  city: string;
  state: string;
  isDefault: boolean;
}

export type Mode = "Add" | "Edit";

export type IAddressForm = {
  address: Address | null;
  mode: Mode;
  setMode: (mode: string) => void;
  handleGetAddresses: () => void;
};

export type IViewAddresses = {
  addresses: Address[];
  setSelectedAddress: (addresses: Address | null) => void;
  setMode: (mode: string) => void;
  handleDeleteAddresses: (addresses: Address) => void;
};

export type MethodType = "GET" | "POST" | "PATCH" | "DELETE";

export type IRequestBuilder = {
  url: string;
  method?: MethodType;
  data?: unknown;
  params?: unknown;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
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
  selectedcategoryId: number | null;
  products: ProductDTO[];
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
