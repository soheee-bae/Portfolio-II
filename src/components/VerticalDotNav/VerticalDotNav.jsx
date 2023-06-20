import { useState, useContext } from 'react';
import { Link } from 'react-scroll';
import clsx from 'clsx';

import CircleIcon from '@mui/icons-material/Circle';
import styles from './VerticalDotNav.module.scss';
import ToggleContext from '../../context/toggleContext';

function VerticalDotNav({ navSection, setNavSection }) {
  const [hover, setHover] = useState('');
  const { isLightMode } = useContext(ToggleContext);

  const dotsInfo = [
    {
      tooltip: 'Home',
      id: 'home'
    },
    {
      tooltip: 'Project',
      id: 'project'
    },
    {
      tooltip: 'About',
      id: 'about'
    }
    // {
    //   tooltip: 'Contact',
    //   id: ''
    // }
  ];

  return (
    <div className={clsx(styles.verticalDotNav, { [styles.darkModeDotNav]: !isLightMode })}>
      {dotsInfo.map((info) => (
        <div key={info.id} className={styles.link}>
          <p className={clsx(styles.tooltip, { [styles.selectedTooltip]: hover === info.id })}>
            {info.tooltip}
          </p>
          <Link activeClass="active" to={info.id} spy={true} smooth={true} duration={500}>
            <div
              className={clsx(styles.dotIcon, {
                [styles.selectedDotIcon]: navSection === info.id
              })}
              onClick={() => {
                setNavSection(info.id);
              }}
              onMouseEnter={() => {
                setHover(info.id);
              }}
              onMouseLeave={() => {
                setHover('');
              }}>
              <CircleIcon />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default VerticalDotNav;
