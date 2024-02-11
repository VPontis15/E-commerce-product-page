import Logo from "./Logo";
import Navigation from "./Navigation";
import UserDetails from "./UserDetails";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between ">
      <div className="flex items-center gap-16">
        <Logo />
        <Navigation />
      </div>
      <UserDetails />
    </header>
  );
};

export default Header;
