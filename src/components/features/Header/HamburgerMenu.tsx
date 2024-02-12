import { useState } from "react";
import NavigationMobile from "./NavigationMobile";

const HamburgerMenu: React.FC = () => {
  const [hamburgerModal, setHamburgerModal] = useState<boolean>(false);

  const openHamburgerModal = () => {
    setHamburgerModal(true);
  };
  const closeHamburgerModal = () => {
    setHamburgerModal(false);
  };
  return (
    <>
      <button onClick={() => openHamburgerModal()} className="relative">
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
            fill="#69707D"
            fillRule="evenodd"
          />
        </svg>
      </button>
      {hamburgerModal && (
        <NavigationMobile onCloseHamburgerModal={closeHamburgerModal} />
      )}
    </>
  );
};

export default HamburgerMenu;
