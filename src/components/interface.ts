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
};

type Category = {
  id: string;
  name: string;
  slug: string;
};

interface TodaysDeals {
  id: number;
  title: string;
  slug: string;
  price: number;
  oldPrice: number | null;
  discountPercent: number | null;
  ratingAverage: number;
  ratingCount: number;
  image: string;
}

export interface MoreItemsToConsider {
  id: number;
  title: string;
  slug: string;
  price: number;
  oldPrice: number;
  discountPercent: null;
  ratingAverage: number;
  ratingCount: number;
  image: string;
}

export type ICategories = {
  categories: Category[];
};

export type IItemCards = {
  todayDeals: TodaysDeals[];
  moreItemsToConsider: MoreItemsToConsider[];
};

export type IProduct = {
  card: MoreItemsToConsider | TodaysDeals;
};
