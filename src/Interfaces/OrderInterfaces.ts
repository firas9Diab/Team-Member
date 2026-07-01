export interface OrderItem {
  id: number;
  productId: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  lineTotal: number;
}
export interface Order {
  id: number;
  orderNumber: string;
  status: "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED";
  subtotal: number;
  total: number;
  shipToName: string;
  placedAt: string;
  items: OrderItem[];
}
export interface IOrderProduct {
  order: Order;
}
