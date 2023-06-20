import { Link } from 'react-scroll';
import clsx from 'clsx';

import CircleIcon from '@mui/icons-material/Circle';
import styles from './VerticalDotNav.module.scss';

function VerticalDotNav({ navSection, setNavSection }) {
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
    <div className={styles.verticalDotNav}>
      {dotsInfo.map((info) => (
        <Link
          key={info.id}
          activeClass="active"
          to={info.id}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => {
            setNavSection(info.id);
          }}
          className={clsx(styles.link, { [styles.selectedLink]: info.id === navSection })}>
          <p>{info.tooltip}</p>
          <div
            className={clsx(styles.dotIcon, {
              [styles.selectedDotIcon]: navSection === info.id
            })}>
            <CircleIcon />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default VerticalDotNav;
