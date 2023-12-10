import React from 'react';

import ProjectStepper from '../../components/ProjectStepper/ProjectStepper';
import styles from './Project.module.scss';
import Layout from '../../components/Layout/Layout';

function Project() {
  return (
    <Layout className={styles.project}>
      <ProjectStepper />
    </Layout>
  );
}

export default Project;
