import { useContext } from 'react';
import { a } from '@react-spring/web';
import clsx from 'clsx';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import styles from './SwitchIcons.module.scss';
import ToggleContext from '../../context/toggleContext';

function Icons() {
  const { isLightMode } = useContext(ToggleContext);
  const color = isLightMode ? 'var(--blackColor300)' : 'var(--whiteColor600)';

  return (
    <a.div className={styles.icons}>
      <p className={styles.icon}>
        <LightModeOutlinedIcon sx={{ color: color }} />
      </p>
      <p className={clsx(styles.icon, styles.dark)}>
        <DarkModeOutlinedIcon sx={{ color: color }} />
      </p>
    </a.div>
  );
}
export default Icons;
