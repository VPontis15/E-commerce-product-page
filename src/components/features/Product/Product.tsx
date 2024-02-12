import { ProductType } from "../../../state/types/productType";

const Product: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <>
      <h4 className="mb-4 mt-8 text-center text-xs font-semibold uppercase tracking-[2px] text-accent-clr  md:text-left md:text-1xs lg:mt-0">
        {product.manufacturer}
      </h4>
      <h1 className=" text-center text-4xl font-bold text-heading-clr md:text-left ">
        {product.name}
      </h1>
      <p className="mt-6 text-center text-lg md:text-left md:text-base ">
        {product.description}
      </p>
      {product.discounted_price ? (
        <>
          <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
            <span className=" text-3xl font-bold text-heading-clr md:text-2xl">
              ${product.discounted_price.toFixed(2)}
            </span>

            <span className="rounded-md bg-accent-light px-2 text-lg font-semibold text-accent-clr md:text-base ">
              {product.discountAmount * 100}%{" "}
            </span>
          </div>
          <span className=" block text-center text-base text-nav-items-color line-through md:text-left md:text-sm">
            {product.price.toFixed(2)}
          </span>
        </>
      ) : (
        <div className="mt-6">
          <span className=" text-2xl font-bold text-heading-clr">
            ${product.price.toFixed(2)}
          </span>
        </div>
      )}
    </>
  );
};

export default Product;
