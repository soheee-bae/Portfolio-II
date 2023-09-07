import React, { useContext } from 'react';
import { a } from '@react-spring/web';

import ToggleContext from '../../context/toggleContext';
import styles from './Project.module.scss';
// import ProjectStepper from '../../components/ProjectStepper/ProjectStepper';

function Project() {
  const { x } = useContext(ToggleContext);

  return (
    <a.div
      id="project"
      className={styles.project}
      style={{
        backgroundColor: x.to([0, 1], ['var(--whiteColor350)', 'var(--blackColor350)'])
      }}>
      <h1>PROJECT</h1>
      {/* <ProjectStepper /> */}
    </a.div>
  );
}

export default Project;
