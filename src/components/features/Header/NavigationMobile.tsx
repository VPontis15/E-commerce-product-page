const NavigationMobile: React.FC<{ onCloseHamburgerModal: boolean }> = ({
  onCloseHamburgerModal,
}) => {
  return (
    <>
      <nav className="absolute left-0 top-0 z-50 min-h-screen bg-white shadow-md">
        <button
          onClick={() => onCloseHamburgerModal()}
          className="absolute left-6 top-8 "
        >
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <ul className="mt-12 flex min-h-screen flex-col gap-2">
          <li className="p-12 text-center">
            <a className="nav-link" href="#">
              Collections
            </a>
          </li>
          <li className="p-12 text-center">
            <a className="nav-link" href="#">
              Men
            </a>
          </li>
          <li className="p-12 text-center">
            <a className="nav-link" href="#">
              Women
            </a>
          </li>
          <li className="p-12 text-center">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="p-12 text-center">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationMobile;
