import { useContext } from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.scss';

import { useScroll as hookScroll } from '../../hooks/useScroll';
import ToggleContext from '../../context/toggleContext';
// import LanguageBtn from "../LanguageBtn/LanugageBtn";

const navItems = [
  { label: 'Home', value: 'home' },
  { label: 'Project', value: 'project' },
  { label: 'About', value: 'about' }
];

function Navbar() {
  const { scrollTriggered } = hookScroll();
  const { toggle } = useContext(ToggleContext);

  return (
    <div
      className={styles.navbar}
      data-scrollDarkMode={scrollTriggered && toggle === 1}
      data-scroll={scrollTriggered}>
      <div className={styles.navbarContent}>
        {navItems.map((nav) => (
          <Link
            key={nav.label}
            activeClass="active"
            to={nav.value}
            spy={true}
            smooth={true}
            duration={500}>
            {nav.label}
          </Link>
        ))}
        {/* <LanguageBtn /> */}
      </div>
    </div>
  );
}

export default Navbar;
