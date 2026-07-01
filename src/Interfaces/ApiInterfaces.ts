import type {
  SignInDTO,
  SignUpDTO,
  ChangeMyDetailsDTO,
} from "./AuthInterfaces";
import type { AddressDTO, IPasswordForm } from "./AddressInterfaces";
import type {
  ProductListItemDTO,
  ProductDetailsDTO,
  ProductParams,
  ProductDetailsParams,
} from "./ProductInterfaces";
import type {
  ProductReview,
  AddProductReviewDTO,
  ReviewParams,
} from "./ReviewInterfaces";
import type { AddCartDTO } from "./CartInterfaces";
export type MethodType = "GET" | "POST" | "PATCH" | "DELETE";
export type RequestData =
  | ProductListItemDTO
  | ProductListItemDTO[]
  | ProductDetailsDTO[]
  | AddressDTO
  | AddressDTO[]
  | SignInDTO
  | SignUpDTO
  | ChangeMyDetailsDTO
  | ProductReview[]
  | AddProductReviewDTO
  | AddCartDTO
  | IPasswordForm;
export type RequestParams =
  ProductParams | ReviewParams | ProductDetailsParams | undefined;
export type IRequestBuilder = {
  url: string;
  method?: MethodType;
  data?: RequestData;
  params?: RequestParams;
};
