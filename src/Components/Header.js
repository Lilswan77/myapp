export const Header = () => {
  return (
    <header>
      <div className="light"></div>
      <div className="dark"></div>
      <nav>
        <div className="nav-section">
          <h3>
            <a href="http://localhost:3000/">Welcome</a>
          </h3>
        </div>
        <div className="nav-section">
          <h3>
            <a href="http://localhost:3000/">About</a>
          </h3>
        </div>
        <div className="nav-section">
          <h3>
            <a href="http://localhost:3000/">Shop</a>
          </h3>
        </div>
        <div className="nav-section">
          <h3>
            <a href="http://localhost:3000/">Contact</a>
          </h3>
        </div>
      </nav>
    </header>
  );
};

export default Header;
