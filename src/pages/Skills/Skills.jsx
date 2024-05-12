import styles from './Skills.module.scss';
import Layout from '../../components/Layout/Layout';
import { useContext } from 'react';
import ToggleContext from '../../context/toggleContext';

function Skills() {
  const { isLightMode } = useContext(ToggleContext);

  //   const [display, setDisplay] = useState(false);

  const color = isLightMode ? 'var(--blackColor200)' : 'var(--whiteColor300)';
  console.log(color);
  //   const arrowSrc = isLightMode ? './image/curly-arrow.png' : './image/curly-arrowWhite.png';

  return (
    <Layout className={styles.skillsContainer}>
      <div className={styles.skillsContent} style={{ color: color }}></div>
    </Layout>
  );
}

export default Skills;
