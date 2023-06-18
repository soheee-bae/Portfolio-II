import { useContext } from 'react';
import { a } from '@react-spring/web';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import styles from './ThemeIcons.module.scss';
import ToggleContext from '../../context/toggleContext';
import clsx from 'clsx';

function Icons() {
  const { toggle } = useContext(ToggleContext);

  const color = toggle === 1 ? '#ADB5BD' : '#343A40';

  return (
    <a.div className={styles.icons}>
      <p className={clsx(styles.icon, styles.light)}>
        <LightModeOutlinedIcon sx={{ color: color }} />
      </p>
      <p className={clsx(styles.icon, styles.dark)}>
        <DarkModeOutlinedIcon sx={{ color: color }} />
      </p>
    </a.div>
  );
}
export default Icons;
