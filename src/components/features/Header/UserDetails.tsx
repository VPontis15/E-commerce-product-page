import { useState } from "react";
import CartModal from "../../CartModal";
import { useAppSelector } from "../../../state/hook";
import { useAppDispatch } from "../../../state/store";
import { removeFromCart } from "../../../state/Cart/CartSlice";

const UserDetails: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  function handleIsOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className=" flex items-center gap-8">
        <button className="relative" onClick={() => handleIsOpen()}>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fillRule="nonzero"
            />
          </svg>
          {cartItems && cartItems.length > 0 && (
            <span className="absolute -top-3 left-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent-clr text-xs text-white">
              {cartItems.length}
            </span>
          )}
        </button>
        <button className="relative">
          <img
            className="h-10 w-10 rounded-[50%] object-cover object-top"
            src="src\assets\images\vince.jpg"
            alt=""
          />
        </button>
      </div>
      {isOpen && (
        <CartModal>
          <span className="border-b-2 p-4  font-semibold  text-heading-clr">
            Cart
          </span>

          <div className="flex h-full flex-1 flex-col items-center justify-center">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item) => {
                return (
                  <div className="flex items-center gap-4">
                    <img
                      className="w-12 rounded-lg"
                      src={item.thumbnail}
                      alt=""
                    />
                    <div>
                      <span className="text-sm">{item.name}</span>
                      <div className="flex">
                        <p className="text-sm">
                          $
                          <span>
                            {item.discounted_price
                              ? item.discounted_price
                              : item.price}
                          </span>
                          <span> x</span> {item.quantity} $
                          <span className="  font-bold text-heading-clr">
                            {item.final_price.toFixed(2)}
                          </span>
                        </p>
                      </div>
                    </div>
                    <button onClick={() => dispatch(removeFromCart(item))}>
                      <svg
                        width="14"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <defs>
                          <path
                            d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                            id="a"
                          />
                        </defs>
                        <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
                      </svg>
                    </button>
                  </div>
                );
              })
            ) : (
              <span>Your cart is empty</span>
            )}
          </div>
        </CartModal>
      )}
    </>
  );
};

export default UserDetails;
