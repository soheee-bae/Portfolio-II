import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase';

export const ProjectContext = React.createContext({
  projects: [],
  isFetching: false
});

function ProjectContextProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchProject = async () => {
    await getDocs(collection(firestore, 'Projects')).then(async (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const sortedData = newData.sort((a, b) => a.order - b.order);
      setProjects(sortedData);
      setIsFetching(false);
    });
  };

  useEffect(() => {
    setIsFetching(true);

    fetchProject();
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        isFetching
      }}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectContext;
export { ProjectContextProvider };
