export interface ProductType {
  id: number;
  name: string;
  description: string;
  price: number;
  onDiscount: boolean;
  discountAmount: number | null;
  manufacturer: string;
}
