import React, { useContext } from 'react';

import ContactContent from '../../components/ContactContent/ContactContent';
import ContactForm from '../../components/ContactForm/ContactForm';
import ToggleContext from '../../context/toggleContext';

import styles from './Contact.module.scss';
import clsx from 'clsx';
import Layout from '../../components/Layout/Layout';

function Contact() {
  const { isLightMode } = useContext(ToggleContext);
  const color = isLightMode ? 'var(--blackColor200)' : 'var(--whiteColor300)';

  return (
    <Layout className={styles.contact} animationType="scale">
      <div className={styles.contactContainer}>
        <div className={styles.contactContent}>
          <div>
            <h1 style={{ color: color }}>CONTACT</h1>
            <div
              className={clsx(styles.texts, {
                [styles.darkTexts]: isLightMode
              })}>
              <p>모든 조언과 의견은 제게 소중합니다.</p>
              <p>항상 감사히 받아들이며 꾸준히 배우겠습니다.</p>
            </div>
            <ContactContent />
          </div>
        </div>
        <ContactForm isLightMode={isLightMode} />
      </div>
    </Layout>
  );
}

export default Contact;
