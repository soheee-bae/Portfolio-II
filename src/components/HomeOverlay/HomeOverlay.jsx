import { useContext, useState } from 'react';
import { Highlight } from '../../icons';
import ToggleContext from '../../context/toggleContext';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BookIcon from '@mui/icons-material/Book';
import EmailIcon from '@mui/icons-material/Email';
import Tooltip from '@mui/material/Tooltip';

import styles from './HomeOverlay.module.scss';
import MiniAbout from '../MiniAbout/MiniAbout';

function Overlay() {
  const { isLightMode } = useContext(ToggleContext);

  const [display, setDisplay] = useState(false);

  const color = isLightMode ? 'var(--blackColor200)' : 'var(--whiteColor300)';
  const arrowSrc = isLightMode ? './image/curly-arrow.png' : './image/curly-arrowWhite.png';

  const contacts = [
    {
      icon: <GitHubIcon sx={{ color: color }} />,
      href: 'https://github.com/soheee-bae',
      label: 'Github'
    },
    {
      icon: <EmailIcon sx={{ color: color }} />,
      href: 'mailto:baesohee28@gmail.com',
      label: 'Email'
    },
    {
      icon: <LinkedInIcon sx={{ color: color }} />,
      href: 'https://www.linkedin.com/in/bae-sohee/',
      label: 'Linkedin'
    },
    {
      icon: <BookIcon sx={{ color: color }} />,
      href: 'https://soheee-bae.github.io/',
      label: 'Blog'
    }
  ];

  return (
    <div className={styles.overlay} style={{ color: `${color}` }}>
      <div className={styles.imageContainer}>
        <div className={styles.arrows}>
          <p>Hover me!</p>
          <img className={styles.arrow} src={arrowSrc} alt="arrow" />
        </div>
        <div
          className={styles.profileArea}
          onMouseEnter={() => {
            setDisplay(true);
          }}
          onMouseLeave={() => {
            setDisplay(false);
          }}>
          <img className={styles.profile} src="./image/profile.jpg" alt="profile" />
          {display && <MiniAbout />}
        </div>
      </div>
      <div className={styles.bio}>
        <p>
          남다른 도전정신을 가진 개발자,
          <span>
            배소희
            <Highlight />
          </span>
          입니다.
        </p>
        <p>
          새로운 환경이나 변화에 긍정적으로 도전하는 것을 즐기며 <br /> 꾸준히 성장하는 습관을
          만들어 가고 있습니다.
        </p>
      </div>
      <div className={styles.contacts}>
        {contacts.map((contact) => (
          <Tooltip key={contact.label} title={contact.label}>
            <a target="_blank" rel="noreferrer" href={contact.href}>
              {contact.icon}
            </a>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export default Overlay;
