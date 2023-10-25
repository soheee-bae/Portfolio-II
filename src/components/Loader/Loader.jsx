import { useContext } from 'react';
import ToggleContext from '../../context/toggleContext';

import styles from './Loader.module.scss';
import clsx from 'clsx';

export function Loader() {
  const { isLightMode } = useContext(ToggleContext);

  return (
    <div className={styles.skchase}>
      <div className={clsx(styles.skchasedot, { [styles.skchasedotDarkMode]: !isLightMode })}></div>
      <div className={clsx(styles.skchasedot, { [styles.skchasedotDarkMode]: !isLightMode })}></div>
      <div className={clsx(styles.skchasedot, { [styles.skchasedotDarkMode]: !isLightMode })}></div>
      <div className={clsx(styles.skchasedot, { [styles.skchasedotDarkMode]: !isLightMode })}></div>
      <div className={clsx(styles.skchasedot, { [styles.skchasedotDarkMode]: !isLightMode })}></div>
      <div className={clsx(styles.skchasedot, { [styles.skchasedotDarkMode]: !isLightMode })}></div>
    </div>
  );
}
