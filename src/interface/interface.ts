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

export interface IRequestBuilder {
  url: string;
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  data?: object;
}

export interface Categories {
  id: number;
  name: string;
  slug: string;
}

export interface ProductDto{
  id: number,
  title: string,
  slug: string,
  price: number,
  oldPrice: number | null;
  discountPercent: number | null;
  ratingAverage: number,
  ratingCount: number,
  image: string
}


 export interface IItemCard {
  todaysDeals: ProductDto[];
  moreItems: ProductDto[];
}



 export interface ICategories {
  categories: Categories[];
  handleCategorychange:(arg0: number)=>void;
  };

 export interface IProductItems{
  search: string;
  selectedCategories: number| undefined;
  categories :Categories[];
  handleCategorychange:(arg0: number)=>void;
 }



export interface INavbar {
  search: string;
 handleSearchChange:(arg0: string)=>void;
}

export interface  ICard{
 Product :ProductDto;
};

export interface IHome{
  search:string;
}