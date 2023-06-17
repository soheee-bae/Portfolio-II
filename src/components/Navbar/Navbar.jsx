import { Link, animateScroll as scroll } from "react-scroll";

const navItems = [
  { label: "Home", value: "home" },
  { label: "Project", value: "project" },
  { label: "About", value: "about" },
];

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarContent">
        {navItems.map((nav) => (
          <Link
            activeClass="active"
            to={nav.value}
            spy={true}
            smooth={true}
            duration={500}>
            {nav.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
