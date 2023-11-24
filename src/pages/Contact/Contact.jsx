import React, { useContext } from 'react';
import { a } from '@react-spring/web';
import clsx from 'clsx';

import ContactContent from '../../components/ContactContent/ContactContent';
import ContactForm from '../../components/ContactForm/ContactForm';
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
      <div className={styles.contactContainer}>
        <div className={styles.contactContent}>
          <div>
            <h1>CONTACT</h1>
            <div className={clsx(styles.texts, { [styles.darkTexts]: isLightMode })}>
              <p>모든 조언과 의견은 제게 소중합니다.</p>
              <p>항상 감사히 받아들이며 꾸준히 배우겠습니다.</p>
            </div>
            <ContactContent />
          </div>
        </div>
        <ContactForm />
      </div>
    </a.div>
  );
}

export default Contact;
