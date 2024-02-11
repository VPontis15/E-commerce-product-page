import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const CartModal: React.FC<ModalProps> = ({ children }) => {
  return children;
};

export default CartModal;
