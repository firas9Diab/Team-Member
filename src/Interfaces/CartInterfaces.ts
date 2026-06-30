interface CartItemsDTO {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice: number;
  discountPercent: number;
  ratingAverage?: number;
  ratingCount: number;
  brand: string;
  quantity: number;
  lineTotal: number;
}
export interface AddCartDTO {
  productId: number;
  quantity: number;
}
export interface CartData {
  items: CartItemsDTO[];
  subtotal: number;
  totalItems: number;
}
export interface ICartItems {
  cart: CartData;
  handleConfirmDeleteCartItem: (id: number, titleCartItem: string) => void;
}
