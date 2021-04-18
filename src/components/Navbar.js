const Navbar = (leftColor, rightColor) => {
  const navStyles = {
    background: `linear-gradient(90deg, ${leftColor}, ${rightColor})`,
  };

  return (
    <header style={navStyles}>
      <h4>MULTI</h4>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
