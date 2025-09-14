import { useContext } from 'react';
import ToggleContext from '../../context/toggleContext';

import styles from './ContactContent.module.scss';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BookIcon from '@mui/icons-material/Book';
import EmailIcon from '@mui/icons-material/Email';
import FeedIcon from '@mui/icons-material/Feed';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function ContactContent() {
  const { isLightMode } = useContext(ToggleContext);
  const color = isLightMode ? 'var(--blackColor400)' : 'var(--whiteColor100)';

  const contacts = [
    {
      label: 'Github',
      href: 'https://github.com/soheee-bae',
      icon: <GitHubIcon sx={{ color: color }} />
    },
    {
      label: 'Email',
      href: 'mailto:baesoheee@gmail.com',
      icon: <EmailIcon sx={{ color: color }} />
    },
    {
      label: 'Linkedin',
      href: 'https://www.linkedin.com/in/sohee-bae-b37a9a166/',
      icon: <LinkedInIcon sx={{ color: color }} />
    },
    {
      label: 'Blog',
      href: 'https://soheee-bae.github.io/',
      icon: <BookIcon sx={{ color: color }} />
    },
    {
      label: 'Resume',
      href: 'https://soheedev.notion.site/2ef5ab86c81a4609b932a19126f0146f?pvs=4',
      icon: <FeedIcon sx={{ color: color }} />
    },
    {
      label: '010 9551 7426',
      icon: <LocalPhoneIcon sx={{ color: color }} />
    }
  ];
  return (
    <ul className={styles.contactContent}>
      {contacts.map((contact) => (
        <li key={contact.label} className={styles.contactList}>
          {contact.icon}
          <a target="_blank" rel="noreferrer" href={contact.href} style={{ color: `${color}` }}>
            {contact.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
export default ContactContent;
