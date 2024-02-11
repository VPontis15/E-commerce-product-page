export interface ProductType {
  id: number;
  name: string;
  description: string;
  onDiscount: boolean;
  discountAmount: number | null;
}
