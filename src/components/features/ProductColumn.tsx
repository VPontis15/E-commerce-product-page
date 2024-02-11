import axios from "axios";
import { UseQueryResult, useQuery } from "react-query";
import { ProductType } from "../../state/types/productType";
import Product from "./Product/Product";
import Quantity from "./Product/Quantity";

interface Products {
  products: ProductType[];
}

async function getProducts(): Promise<Products> {
  try {
    const response = await axios.get<Products>(
      `http://localhost:3001/sneakers`,
    );
    const data = response.data;

    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
}

const ProductColumn: React.FC = () => {
  const queryKey = "sneakers";
  const queryFn = getProducts;

  const { data, error, isLoading }: UseQueryResult<ProductType[], Error> =
    useQuery(queryKey, queryFn);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>{error.message}</span>;
  const currentProduct = data[0];

  return (
    <section className="">
      {currentProduct && (
        <>
          {" "}
          <Product product={currentProduct} />
          <Quantity />
        </>
      )}
    </section>
  );
};

export default ProductColumn;
