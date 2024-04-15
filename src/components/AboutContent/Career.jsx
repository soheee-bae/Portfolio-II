import { useContext, useState } from 'react';
import { Sagetap } from '../../icons';
import styles from './AboutContent.module.scss';
import ToggleContext from '../../context/toggleContext';
import CursorContext from '../../context/cursorContext';
import AccordionComp from '../Accordion/Accordion';
import { careers } from '../../datas/Careers';

function Career() {
  const { isLightMode } = useContext(ToggleContext);
  const { textEnter, textLeave } = useContext(CursorContext);
  const [accordion, setAccordion] = useState(0);

  return (
    <div className={styles.content}>
      <div className={styles.careerContent}>
        <div>
          <Sagetap />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.sagetap.io/"
            className={styles.subtitle}
            onMouseEnter={() => textEnter('click')}
            onMouseLeave={() => textLeave()}
            style={{ color: isLightMode ? '#000000' : '#ffffff' }}>
            Sagetap.io
          </a>
        </div>
        <div className={styles.careerAccordions}>
          {careers.map((career, index) => (
            <AccordionComp
              key={index}
              order={index + 1}
              title={career.title}
              accordion={accordion}
              setAccordion={setAccordion}
              details={
                <div className={styles.careerAccordion}>
                  <p className={styles.careerSubtitle}>{career.subtitle}</p>
                  <ul>
                    {career.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Career;
