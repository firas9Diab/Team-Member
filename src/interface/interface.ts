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

export interface ProductDetailsDto{
  id: number;
  title: string;
  slug: string;
  brand: string;
  description: string;
  price: number;
  oldPrice: number;
  discountPercent: number;
  stock: number;
  ratingAverage: number;
  ratingCount: number;

images: ProductImage [];

features:features[];

aboutThisItem: string[];
}

export interface ProductReviewDTO{
  items:Item[];

  summary: {
    average: number;
    total: number;
    breakdown:  Record<Star, number>
  };

  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };

}

interface ProductImage {
id: number;
url: string;
alt: string;
sortOrder: number;
}

interface  features{
  id: number;
text:string;
}
interface Item {
    id: number;
    reviewerName: string;
    rating: number;
    title: string;
    comment: string;
    isVerified: boolean;
    createdAt: string;
  };

export type Star = 1 | 2 | 3 | 4 | 5;

  export interface ICustomerReview {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  handleRatingChange: (value: string) => void;
  handleTitleChange: (value: string) => void;
  handleCommentChange: (value: string) => void;
  rating: number;
  title: string;
  comment: string;
  setShowReviewForm: React.Dispatch<React.SetStateAction<boolean>>;
  showReviewForm: boolean;
  postReviews: () => void;
  hoveredStar: number;
  setHoveredStar: React.Dispatch<React.SetStateAction<number>>;
  starBar: readonly Star[];
  starRating:  readonly Star[];
  reviews: ProductReviewDTO[];
  getPercentage:(star: Star) => number;
}

  export interface IRenderStars {
    starRating:readonly Star[];
    rating: number;
  }