import styles from './OtherProjects.module.scss';

import { useContext } from 'react';
import ProjectContext from '../../context/projectContext';
import { projectImg } from '../../datas/ProjectImg';

function OtherProjects({ projectId }) {
  const { projects } = useContext(ProjectContext);

  const filteredProject = projects.filter((project) => project.id.replace(/\s/g, '') !== projectId);

  return (
    <div className={styles.otherProjects}>
      <p className={styles.title}>다른 프로젝트 살펴보기</p>
      <div className={styles.projectCards}>
        {filteredProject.slice(0, 2).map((pro) => {
          const selectedProject = projectImg.find(
            (proj) => proj.projectId === pro.id.replace(/\s/g, '')
          );
          return (
            <div key={pro.id} className={styles.projectCard}>
              {selectedProject?.imgPath && (
                <div className={styles.img}>
                  <img src={selectedProject.backgroundPath} alt={projectId} />
                </div>
              )}
              <div className={styles.details}>
                <p className={styles.type}>{pro.type}</p>
                <p className={styles.name}>
                  {pro.iconName}
                  {pro.name}
                </p>
                <p className={styles.description}>{pro.shortDescription}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OtherProjects;
