import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { storage } from '../../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { projectImg } from '../../datas/ProjectImg';

import CursorContext from '../../context/cursorContext';
import ToggleContext from '../../context/toggleContext';
import ProjectContext from '../../context/projectContext';

import Layout from '../../components/Layout/Layout';

import styles from './SubProject.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function SubProject() {
  const { projectId } = useParams();
  const { projects } = useContext(ProjectContext);
  const [image, setImage] = useState(null);
  const project = projects.find((project) => project.id === projectId);
  const { textEnter, cursorVariant } = useContext(CursorContext);
  const { isLightMode } = useContext(ToggleContext);

  const fetchImage = async () => {
    if (projectId) {
      const fullPath = projectImg.find((img) => img.projectId === projectId).imgpath;
      const link = `gs://soheebae-dev.appspot.com/${fullPath}`;
      const imageRef = ref(storage, link);
      const image = await getDownloadURL(imageRef);
      setImage(image);
    }
  };
  console.log(cursorVariant);
  console.log(image);

  useEffect(() => {
    textEnter('noEffect');
    if (projectId) {
      fetchImage();
    }
  }, []);

  return (
    <Layout className={styles.subProject}>
      <div className={styles.container} data-darkmode={!isLightMode}>
        <Link className={styles.navigation} to="/project">
          <ArrowBackIcon /> <p>Back to projects</p>
        </Link>
        <div className={styles.content}>
          <p className={styles.type}>{project?.type}</p>
          <div className={styles.title}>
            <h1>{project?.name}</h1>
          </div>
          <p className={styles.description}>{project?.description}</p>
          <div className={styles.skills}>
            {project?.skills.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </div>
          <div className={styles.hr} />
          <div className={styles.buttons}>
            <button onClick={() => window.open(project?.demo)}>Demo</button>
            <button onClick={() => window.open(project?.github)}>Github</button>
          </div>
        </div>

        {/* <img src={image} alt={projectId} /> */}
      </div>
    </Layout>
  );
}

export default SubProject;
