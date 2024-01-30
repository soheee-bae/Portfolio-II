import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProjectContext from '../../context/projectContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './SubProject.module.scss';
import { storage } from '../../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { projectImg } from '../../datas/ProjectImg';
import CursorContext from '../../context/cursorContext';

function SubProject() {
  const { projectId } = useParams();
  const { projects } = useContext(ProjectContext);
  const [image, setImage] = useState(null);
  const project = projects.find((project) => project.id === projectId);
  const { textEnter, cursorVariant } = useContext(CursorContext);

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

  useEffect(() => {
    textEnter('noEffect');
    if (projectId) {
      fetchImage();
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link className={styles.navigation} to="/project">
          <ArrowBackIcon /> <p>Project</p>
        </Link>
      </div>
      <div className={styles.title}>
        <p>{project?.iconName}</p>
        <h1>{project?.name}</h1>
      </div>
      <div className={styles.subProject}>
        <div className={styles.content}>
          <p className={styles.description}>{project?.description}</p>
          <p className={styles.type}>{project?.type}</p>
          <div className={styles.skills}>
            {project?.skills.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => window.open(project?.demo)}>Demo</button>
          <button onClick={() => window.open(project?.github)}>Github</button>
        </div>
      </div>
      <img src={image} alt={projectId} />
    </div>
  );
}

export default SubProject;
