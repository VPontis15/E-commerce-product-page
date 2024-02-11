export interface CartItemType {
  discounted_price: number;
  final_price: number;
  id: number;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
}
export interface CartState {
  items: CartItemType[];
}
