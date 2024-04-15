import { useContext, useState } from 'react';
import styles from './Tooltip.module.scss';
import ToggleContext from '../../context/toggleContext';

function Tooltip({ trigger, children }) {
  const { isLightMode } = useContext(ToggleContext);
  const [hover, setHover] = useState(false);

  return (
    <div className={styles.container}>
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}>
        {trigger}
      </div>
      {hover && (
        <div className={styles.tooltip} data-darkMode={!isLightMode}>
          {children}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
