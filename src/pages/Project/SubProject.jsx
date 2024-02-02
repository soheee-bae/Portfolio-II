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
  const { cursorVariant } = useContext(CursorContext);
  const { isLightMode } = useContext(ToggleContext);

  async function fetchImage() {
    if (projectId) {
      const img = projectImg.find((img) => img.projectId === projectId);
      const imglink = `gs://soheebae-dev.appspot.com/${img.imgPath}`;
      const bglink = `gs://soheebae-dev.appspot.com/${img.backgroundPath}`;

      const imageRefs = [ref(storage, imglink), ref(storage, bglink)];
      const image = await Promise.all(
        imageRefs.map((ref) => {
          return getImage(ref);
        })
      );

      console.log(image);

      setImage(image);
    }
  }
  console.log(cursorVariant);
  console.log(image);

  // console.log(image);

  useEffect(() => {
    if (projectId) {
      fetchImage();
    }
  }, []);

  return (
    <Layout className={styles.subProject} isFullScreen={false}>
      {image && (
        <div className={styles.background}>
          <img src={image[1]} alt={projectId} />
        </div>
      )}
      <div className={styles.subProjectContainer} data-darkmode={!isLightMode}>
        <div>
          <Link className={styles.navigation} to="/project">
            <ArrowBackIcon /> <p>Back to projects</p>
          </Link>
        </div>
        <SubProjectContent projects={projects} projectId={projectId} />
        {image && (
          <div className={styles.image}>
            <img src={image[0]} alt={projectId} />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default SubProject;

async function getImage(ref) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getDownloadURL(ref));
    }, 100);
  });
}
