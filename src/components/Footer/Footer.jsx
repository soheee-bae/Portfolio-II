import { useContext } from 'react';
import ToggleContext from '../../context/toggleContext';
import styles from './Footer.module.scss';
import { a } from '@react-spring/web';

function Footer() {
  const { x } = useContext(ToggleContext);
  const { isLightMode } = useContext(ToggleContext);

  const color = isLightMode ? 'var(--blackColor400)' : 'var(--whiteColor600)';

  return (
    <a.div
      className={styles.footer}
      style={{
        color: `${color}`,
        backgroundColor: x.to([0, 1], ['var(--whiteColor350)', 'var(--blackColor350)'])
      }}>
      <p>Copyright 2023. SoHee Bae. All rights reserved.</p>
    </a.div>
  );
}

export default Footer;
