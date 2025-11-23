import { useContext } from 'react';
import ToggleContext from '../../context/toggleContext';
import styles from './Footer.module.scss';
import { a } from '@react-spring/web';

function Footer() {
  const { isLightMode, x } = useContext(ToggleContext);

  const color = isLightMode ? 'var(--blackColor400)' : 'var(--whiteColor600)';
  const currentYear = new Date().getFullYear();

  return (
    <a.div
      className={styles.footer}
      style={{
        color: `${color}`,
        backgroundColor: x.to([0, 1], ['var(--whiteColor350)', 'var(--blackColor350)'])
      }}>
      <p>Copyright {currentYear}. SoHee Bae. All rights reserved.</p>
    </a.div>
  );
}

export default Footer;
