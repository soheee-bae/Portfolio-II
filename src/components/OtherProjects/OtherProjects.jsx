// import styles from './OtherProjects.module.scss';

import { useContext } from 'react';
import ProjectContext from '../../context/projectContext';

function OtherProjects({ projectId }) {
  const { projects } = useContext(ProjectContext);
  // isFetching;

  const filteredProject = projects.filter((project) => project.id.replace(/\s/g, '') !== projectId);

  console.log(filteredProject);
  return (
    <div>
      <p>다른 프로젝트 살펴보기</p>
      <div>
        {filteredProject.slice(2).map((pro) => (
          <div key={pro.id}>
            <div>
              <p>{pro.type}</p>
              <p>
                {pro.iconName}
                {pro.name}
              </p>
              <p>{pro.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherProjects;
