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
  handleOpenDeleteModal: () => void;
  handleSelectCartItem: (id: number) => void;
  handlechangeTitleCartItem: (title: string) => void;
}

export interface IDeleteCartItem {
  handleConfirmDeleteCartItem: () => void;
  selectedCartItemTitle: string;
  handleCloseDeleteModal: () => void;
}
