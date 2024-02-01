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
import SubProjectContent from '../../components/SubProjectContent/SubProjectContent';

function SubProject() {
  const { projectId } = useParams();
  const { projects } = useContext(ProjectContext);
  const [image, setImage] = useState(null);
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
      <div className={styles.subProjectContainer} data-darkmode={!isLightMode}>
        <div>
          <Link className={styles.navigation} to="/project">
            <ArrowBackIcon /> <p>Back to projects</p>
          </Link>
        </div>
        <SubProjectContent projects={projects} projectId={projectId} />
        <img src={image} alt={projectId} />
      </div>
    </Layout>
  );
}

export default SubProject;
