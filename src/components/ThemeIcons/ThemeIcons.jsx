import { a } from '@react-spring/web';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import { useToggle } from '../../hooks/useToggle';

import styles from './ThemeIcons.module.scss';
import clsx from 'clsx';

function Icons() {
  const { toggle } = useToggle();

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
