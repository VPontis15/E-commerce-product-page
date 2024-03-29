import { FormEvent, useState } from "react";
import { ProductType } from "../../../state/types/productType";
import { useAppDispatch } from "../../../state/store";
import { addToCart } from "../../../state/Cart/CartSlice";
import { CartItemType } from "../../../state/types/actions/cart";

interface QuantityProps {
  product: ProductType;
}

const Quantity: React.FC<QuantityProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const dispatch = useAppDispatch();
  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function decreaseQuantity() {
    setQuantity((prev) => prev - 1);
    if (quantity <= 0) {
      setQuantity(0);
    }
  }

  function handleSumbit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newCartItemType: CartItemType = {
      id: product.id,
      discounted_price: product.discounted_price,
      name: product.name,
      quantity: quantity,
      price: product.price,
      thumbnail: product.thumbnails[0],
      final_price:
        product.discounted_price * quantity || product.price * quantity,
    };
    if (!quantity) return;

    dispatch(addToCart(newCartItemType));
  }

  return (
    <div className="flex flex-col items-center justify-center  md:flex-row md:justify-start">
      <div className="mt-6 flex flex-col gap-6 md:flex-row">
        <div className=" flex items-center justify-center gap-4 rounded-md bg-blue-100">
          <button onClick={() => decreaseQuantity()} className=" p-4">
            <img src="src\assets\images\icon-minus.svg" alt="" />
          </button>
          <span className="">{quantity}</span>
          <button onClick={() => increaseQuantity()} className=" p-4">
            <img className="" src="src\assets\images\icon-plus.svg" alt="" />
          </button>
        </div>
        <form
          className="rounded-lg bg-accent-clr px-12 py-2"
          onSubmit={(e) => handleSumbit(e)}
          method="post"
        >
          <button className="inline-flex items-center justify-center gap-4    text-white">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
                fillRule="nonzero"
              />
            </svg>
            <span className="f">Add to Cart</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Quantity;
