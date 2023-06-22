import React, { useContext } from 'react';
import { a } from '@react-spring/web';

import ToggleContext from '../../context/toggleContext';
import styles from './Contact.module.scss';

function Contact() {
  const { x } = useContext(ToggleContext);

  return (
    <a.div
      id="contact"
      className={styles.contact}
      style={{
        backgroundColor: x.to([0, 1], ['var(--whiteColor350)', 'var(--blackColor350)'])
      }}>
      Contact
    </a.div>
  );
}

export default Contact;
