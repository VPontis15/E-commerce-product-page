import ProductColumn from "../ProductColumn";

import axios from "axios";
import { UseQueryResult, useQuery } from "react-query";

import ProductImages from "../../ProductImages";
import { ProductType } from "../../../state/types/productType";

interface Products {
  products: ProductType[];
}

async function getProducts(): Promise<Products> {
  try {
    const response = await axios.get<Products>(
      `http://localhost:3001/sneakers`,
    );
    const data = response.data;
    const updatedData = data.map((product: ProductType) => {
      if (product.onDiscount) {
        return {
          ...product,
          discounted_price:
            product.price - product.price * product.discountAmount,
        };
      } else return product;
    });

    return updatedData;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
}

const Main: React.FC = () => {
  const queryKey = "sneakers";
  const queryFn = getProducts;

  const { data, error, isLoading }: UseQueryResult<ProductType[], Error> =
    useQuery(queryKey, queryFn);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>{error.message}</span>;
  const currentProduct = data[0];
  return (
    <main className=" mt-24 grid h-full min-h-[80vh] items-center justify-center px-10    lg:grid-cols-2">
      <ProductImages product={currentProduct} />
      <ProductColumn product={currentProduct} />
    </main>
  );
};

export default Main;
