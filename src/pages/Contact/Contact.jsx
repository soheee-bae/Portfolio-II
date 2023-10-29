import React, { useContext } from 'react';
import { a } from '@react-spring/web';

import ContactContent from '../../components/ContactContent/ContactContent';
import ToggleContext from '../../context/toggleContext';
import styles from './Contact.module.scss';

function Contact() {
  const { x } = useContext(ToggleContext);
  const { isLightMode } = useContext(ToggleContext);

  const color = isLightMode ? 'var(--blackColor200)' : 'var(--whiteColor300)';

  return (
    <a.div
      id="contact"
      className={styles.contact}
      style={{
        color: `${color}`,
        backgroundColor: x.to([0, 1], ['var(--whiteColor350)', 'var(--blackColor350)'])
      }}>
      <div className={styles.titleContent}>
        <h1>CONTACT</h1>
        <p>Copyright 2023. SoHee Bae. All rights reserved.</p>
      </div>
      <ContactContent />
    </a.div>
  );
}

export default Contact;
