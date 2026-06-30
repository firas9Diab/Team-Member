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
  handleOpenModal: () => void;
  handlechangeIdCartItem: (id: number) => void;
  trash: string;
  handlechangeTitleCartItem: (title: string) => void;
}

export interface IDeleteCartItem {
  selectedIdByCartItem: number;
  handleDeleteCart: (id: number) => void;
  titleCartItem: string;
  handleCloseModal: () => void;
}
