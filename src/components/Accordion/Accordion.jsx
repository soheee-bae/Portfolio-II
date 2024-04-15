import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Accordion.module.scss';
import clsx from 'clsx';

function AccordionComp(props) {
  const { title, details, accordion, setAccordion, order } = props;

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeader}>
        <p className={styles.accordionTitle}>{title}</p>
        <button
          className={clsx(styles.expandIcon, {
            [styles.expandIconClicked]: order === accordion
          })}
          onClick={() => {
            if (order === accordion) {
              setAccordion(0);
            } else {
              setAccordion(order);
            }
          }}>
          <ExpandMoreIcon />
        </button>
      </div>
      <div
        className={clsx(styles.accordionDetails, {
          [styles.accordionDetailsExpand]: order === accordion
        })}>
        {details}
      </div>
    </div>
  );
}

export default AccordionComp;
