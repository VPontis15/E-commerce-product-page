import { useEffect, useRef, useState } from "react";
import CartModal from "../../CartModal";
import { useAppSelector } from "../../../state/hook";

import CartItem from "../../CartItem";

const UserDetails: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const CartItems = useAppSelector((state) => state.cart.items);
  const modalRef = useRef<HTMLDivElement>(null);
  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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
          {CartItems && CartItems.length > 0 && (
            <span className="absolute -top-3 left-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent-clr text-xs text-white">
              {CartItems.length}
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
          <div
            className=" absolute right-20 top-20 z-[1000] flex min-h-64 w-full max-w-80 flex-col overflow-y-auto bg-white  py-6 shadow-2xl"
            ref={modalRef}
          >
            <span className="border-b-2 p-4  font-semibold  text-heading-clr">
              Cart
            </span>

            <div className="flex h-full flex-1 flex-col items-center justify-center">
              {CartItems && CartItems.length > 0 ? (
                CartItems.map((item) => {
                  return <CartItem key={item.id} item={item} />;
                })
              ) : (
                <span>Your cart is empty</span>
              )}
            </div>
          </div>
        </CartModal>
      )}
    </>
  );
};

export default UserDetails;
