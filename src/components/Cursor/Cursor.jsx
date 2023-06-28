import { useContext } from 'react';
import styles from './Cursor.module.scss';
import ToggleContext from '../../context/toggleContext';
import CursorContext from '../../context/cursorContext';

function Cursor() {
  const { isLightMode } = useContext(ToggleContext);
  const { variant } = useContext(CursorContext);

  return (
    <div
      className={styles.cursor}
      style={{
        transform: `translate(${variant.x}px, ${variant.y}px)`,
        color: isLightMode ? '#000000' : '#ffffff'
      }}>
      <div
        className={styles.cursorDot}
        style={{
          display: 'hidden',
          backgroundColor: isLightMode ? '#000000' : '#ffffff'
        }}
      />
      <p>{variant.text}</p>
    </div>
  );
}
export default Cursor;
