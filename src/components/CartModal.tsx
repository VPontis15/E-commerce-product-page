import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const CartModal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className=" absolute right-20 top-20 z-[1000] flex min-h-64 w-full max-w-80 flex-col overflow-y-scroll bg-white  py-6 shadow-2xl">
      {children}
    </div>
  );
};

export default CartModal;
