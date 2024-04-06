import { useContext } from 'react';
import styles from './Navbar.module.scss';

import ToggleContext from '../../context/toggleContext';
import clsx from 'clsx';
import { useLocation, Link } from 'react-router-dom';
// import LanguageBtn from '../LanguageBtn/LanugageBtn';

const navItems = [
  { label: 'Home', value: '/' },
  { label: 'Project', value: '/project' },
  { label: 'Skills', value: '/skills' },
  { label: 'Contact', value: '/contact' }
];

function Navbar({ scroll }) {
  const { isLightMode } = useContext(ToggleContext);
  const { pathname } = useLocation();

  return (
    <div className={styles.navbar} data-scroll={scroll} data-darkmode={!isLightMode}>
      <p className={styles.logo}>SoHee.</p>
      <div className={styles.navbarContent}>
        {navItems.map((nav) => (
          <Link
            key={nav.label}
            to={nav.value}
            state={{ prevPath: pathname }}
            className={clsx(styles.nav, {
              [styles.selectedNavDark]: nav.value === pathname && !isLightMode,
              [styles.selectedNav]: nav.value === pathname
            })}>
            {nav.label}
          </Link>
        ))}
        <Link
          to="https://soheedev.notion.site/2ef5ab86c81a4609b932a19126f0146f"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.nav}>
          Resume
        </Link>
        {/* <LanguageBtn /> */}
      </div>
    </div>
  );
}

export default Navbar;
