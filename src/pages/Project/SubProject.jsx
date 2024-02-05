import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projectImg } from '../../datas/ProjectImg';

import styles from './SubProject.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import ProjectContext from '../../context/projectContext';
import SubProjectContent from '../../components/SubProjectContent/SubProjectContent';
import OtherProjects from '../../components/OtherProjects/OtherProjects';
import Layout from '../../components/Layout/Layout';

function SubProject() {
  const { projectId } = useParams();
  const { projects } = useContext(ProjectContext);

  const updatedProjectId = projectId.replace(/\s/g, '');
  const selectedProject = projectImg.find((proj) => proj.projectId === updatedProjectId);

  return (
    <Layout className={styles.subProject} isFullScreen={false}>
      {selectedProject.backgroundPath && (
        <div className={styles.background}>
          <img src={selectedProject.backgroundPath} alt={projectId} />
        </div>
      )}
      <div className={styles.subProjectContainer}>
        <div>
          <Link className={styles.navigation} to="/project">
            <ArrowBackIcon /> <p>Back to projects</p>
          </Link>
        </div>
        <SubProjectContent projects={projects} projectId={projectId} />
        {selectedProject.imgPath && (
          <div className={styles.image}>
            <img src={selectedProject.imgPath} alt={projectId} />
          </div>
        )}
        <OtherProjects projectId={updatedProjectId} />
      </div>
    </Layout>
  );
}

export default SubProject;
