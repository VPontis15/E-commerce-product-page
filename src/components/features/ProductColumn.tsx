import { ProductType } from "../../state/types/productType";
import Product from "./Product/Product";
import Quantity from "./Product/Quantity";

const ProductColumn: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <section className="">
      {product && (
        <>
          {" "}
          <Product product={product} />
          <Quantity product={product} />
        </>
      )}
    </section>
  );
};

export default ProductColumn;
