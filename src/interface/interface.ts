export interface AddressType {
  id: number;
  name: string;
  flatHouseBuilding: string;
  city: string;
  state: string;
  country: string;
  mobileNumber: string;
  alternativeMobileNumber?: string;
  pincode: string;
  isDefault?: boolean;
}

export interface IAddressForm {
  mode: "add" | "edit";
  initialData?: AddressType;
  onSubmit: (data: AddressType) => void;
  onCancel: () => void;
}

export interface RequestBuilderProps {
  url: string;
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  data?: object;
}

export interface ICategories {
  id: number;
  name: string;
  slug: string;
}

export interface TodaysDeals{
  id: number,
  title: string,
  slug: string,
  price: number,
  oldPrice: null,
  discountPercent: null,
  ratingAverage: number,
  ratingCount: number,
  image: string
}

export interface moreItems{
  id: number,
  title: string,
  slug: string,
  price: number,
  oldPrice: number,
  discountPercent: null,
  ratingAverage: number,
  ratingCount: number,
  image: string
}

 export interface ItemCardProps {
  todaysDeals: TodaysDeals[];
  moreItems: moreItems[];
}



 export interface CategoriesProps {
  categories: ICategories[];
};
