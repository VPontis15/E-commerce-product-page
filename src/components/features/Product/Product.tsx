import { ProductType } from "../../../state/types/productType";

const Product: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <>
      <h4 className="text-1xs mb-4 font-semibold  uppercase tracking-[2px] text-accent-clr">
        {product.manufacturer}
      </h4>
      <h1 className=" text-4xl font-bold text-heading-clr">{product.name}</h1>
      <p className="mt-6">{product.description}</p>
      {product.onDiscount ? (
        <>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-2xl font-bold text-heading-clr">
              $
              {(product.price - product.price * product.discountAmount).toFixed(
                2,
              )}
            </span>

            <span className="rounded-md bg-accent-light px-2 font-semibold text-accent-clr ">
              {product.discountAmount * 100}%{" "}
            </span>
          </div>
          <span className="text-sm text-nav-items-color line-through">
            {product.price.toFixed(2)}
          </span>
        </>
      ) : (
        <span className="text-2xl font-bold text-heading-clr">
          ${product.price.toFixed(2)}
        </span>
      )}
    </>
  );
};

export default Product;
