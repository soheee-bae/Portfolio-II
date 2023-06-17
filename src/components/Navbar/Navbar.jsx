import { Link } from 'react-scroll';
import './Navbar.css';

import { useScroll as hookScroll } from '../../hooks/useScroll';
import { useToggle } from '../../hooks/useToggle';
// import LanguageBtn from "../LanguageBtn/LanugageBtn";

const navItems = [
  { label: 'Home', value: 'home' },
  { label: 'Project', value: 'project' },
  { label: 'About', value: 'about' }
];

function Navbar() {
  const { scrollTriggered } = hookScroll();
  const { toggle } = useToggle();

  return (
    <div
      className="navbar"
      data-scrollDarkMode={scrollTriggered && toggle === 1}
      data-scroll={scrollTriggered}
    >
      <div className="navbarContent">
        {navItems.map((nav) => (
          <Link activeClass="active" to={nav.value} spy={true} smooth={true} duration={500}>
            {nav.label}
          </Link>
        ))}
        {/* <LanguageBtn /> */}
      </div>
    </div>
  );
}

export default Navbar;
