import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase';
import { useState, useEffect } from 'react';

export const getProjects = () => {
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

  return { projects, isFetching };
};
