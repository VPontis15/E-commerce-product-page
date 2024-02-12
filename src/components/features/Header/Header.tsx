import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import Navigation from "./Navigation";
import UserDetails from "./UserDetails";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between md:flex-row ">
      <div className="flex gap-4 md:items-center md:gap-16">
        <HamburgerMenu />
        <Logo />
        <Navigation />
      </div>
      <UserDetails />
    </header>
  );
};

export default Header;
