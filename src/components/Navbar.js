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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
