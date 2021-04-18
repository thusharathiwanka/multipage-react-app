import { Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
