import { useContext } from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.scss';

import ToggleContext from '../../context/toggleContext';
// import LanguageBtn from '../LanguageBtn/LanugageBtn';

const navItems = [
  { label: 'Home', value: 'home' },
  { label: 'Project', value: 'project' },
  { label: 'About', value: 'about' }
];

function Navbar({ scroll }) {
  const { isLightMode } = useContext(ToggleContext);

  return (
    <div className={styles.navbar} data-scroll={scroll} data-darkmode={!isLightMode}>
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
