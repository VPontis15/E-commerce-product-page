export interface ProductType {
  discounted_price: number;
  id: number;
  name: string;
  description: string;
  price: number;
  onDiscount: boolean;
  discountAmount: number;
  manufacturer: string;
  images: string[];
  thumbnails: string[];
}
