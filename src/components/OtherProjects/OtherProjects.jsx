// import styles from './OtherProjects.module.scss';

import { useContext } from 'react';
import ProjectContext from '../../context/projectContext';

function OtherProjects() {
  const { projects } = useContext(ProjectContext);
  // isFetching;
  console.log(projects);
  return (
    <div>
      <p>다른 프로젝트 살펴보기</p>
      <div></div>
    </div>
  );
}

export default OtherProjects;
