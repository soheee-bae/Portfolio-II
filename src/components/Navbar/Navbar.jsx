import { useContext } from 'react';
import styles from './Navbar.module.scss';
import { a } from '@react-spring/web';

import ToggleContext from '../../context/toggleContext';
import clsx from 'clsx';
import { useLocation, Link } from 'react-router-dom';
// import LanguageBtn from '../LanguageBtn/LanugageBtn';

const navItems = [
  { label: 'Home', value: '/' },
  { label: 'Project', value: '/project' },
  { label: 'Contact', value: '/contact' }
];

function Navbar() {
  const { isLightMode, x } = useContext(ToggleContext);

  const { pathname } = useLocation();
  const color = isLightMode ? 'var(--blackColor400)' : 'var(--whiteColor100)';

  return (
    <a.div
      className={styles.navbar}
      data-scroll={scroll}
      data-darkmode={!isLightMode}
      style={{
        backgroundColor: x.to([0, 1], ['var(--whiteColor350)', 'var(--blackColor350)'])
      }}>
      <p className={styles.logo} style={{ color: color }}>
        SoHee.
      </p>
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
    </a.div>
  );
}

export default Navbar;
