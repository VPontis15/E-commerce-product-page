const Navigation: React.FC = () => {
  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex gap-2">
          <li>
            <a className="nav-link" href="#">
              Collections
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Men
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Women
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
