import { useContext } from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.scss';

import ToggleContext from '../../context/toggleContext';
import clsx from 'clsx';
// import LanguageBtn from '../LanguageBtn/LanugageBtn';

const navItems = [
  { label: 'Home', value: 'home' },
  { label: 'Project', value: 'project' },
  { label: 'About', value: 'about' },
  { label: 'Contact', value: 'contact' },
  { label: 'Resume', value: 'resume' }
];

function Navbar({ scroll, navSection, setNavSection }) {
  const { isLightMode } = useContext(ToggleContext);

  return (
    <div className={styles.navbar} data-scroll={scroll} data-darkmode={!isLightMode}>
      <p className={styles.logo}>SoHee.</p>
      <div className={styles.navbarContent}>
        {navItems.map((nav) => (
          <Link
            key={nav.label}
            activeClass="active"
            to={nav.value}
            spy={true}
            smooth={true}
            duration={500}
            className={clsx(styles.nav, {
              [styles.selectedNavDark]: nav.value === navSection && !isLightMode,
              [styles.selectedNav]: nav.value === navSection
            })}
            onClick={() => {
              if (nav.value === 'resume') {
                window.open(
                  'https://soheedev.notion.site/2ef5ab86c81a4609b932a19126f0146f',
                  '_blank'
                );
              } else {
                setNavSection(nav.value);
              }
            }}>
            {nav.label}
          </Link>
        ))}
        {/* <LanguageBtn /> */}
      </div>
    </div>
  );
}

export default Navbar;
