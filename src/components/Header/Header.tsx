import Logo from './Logo';
import Navigation from './Navigation';
import UserDetails from './UserDetails';

function Header() {
  return (
    <header className="px-8 flex justify-between">
      <div className="flex items-center gap-16">
        <Logo />
        <Navigation />
      </div>
      <UserDetails />
    </header>
  );
}

export default Header;
