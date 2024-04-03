import styles from './Skills.module.scss';
import Layout from '../../components/Layout/Layout';
import { useContext } from 'react';
import ToggleContext from '../../context/toggleContext';
import { LightBulb, LeftCurveArrow } from '../../icons';
import clsx from 'clsx';

function Skills() {
  const { isLightMode } = useContext(ToggleContext);

  //   const [display, setDisplay] = useState(false);

  const color = isLightMode ? 'var(--blackColor200)' : 'var(--whiteColor300)';
  //   const arrowSrc = isLightMode ? './image/curly-arrow.png' : './image/curly-arrowWhite.png';

  return (
    <Layout className={styles.skillsContainer}>
      <div className={styles.skillsContent}>
        <div className={clsx(styles.skillsSubtitle, styles.firstSubtitle)}>
          <LeftCurveArrow color={color} />
        </div>
        <div className={styles.skillsTitle}>
          <LightBulb color={color} />
          <p>Skills</p>
        </div>
        <div className={clsx(styles.skillsSubtitle, styles.secondSubtitle)}>
          <LeftCurveArrow color={color} />
        </div>
      </div>
    </Layout>
  );
}

export default Skills;
