import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProjectContext from '../../context/projectContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './SubProject.module.scss';

export async function projectLoader({ params }) {
  const projectId = params.projectId;
  return { projectId };
}

function SubProject() {
  const { projectId } = useLoaderData();
  const { projects } = useContext(ProjectContext);

  const project = projects.find((project) => project.id === projectId);
  console.log(project);
  return (
    <div>
      <div className={styles.header}>
        <ArrowBackIcon /> <p>Project</p>
      </div>
      <h1>
        {project?.iconName}
        {project?.name}
      </h1>
      <div className={styles.subProject}>
        <div className={styles.content}>
          <p>{project?.description}</p>
          <p>{project?.type}</p>
          <div>
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
    </div>
  );
}

export default SubProject;
//   // const [images, setImages] = useState([]);

//   const sliderRef = useRef();
//   const { isLightMode } = useContext(ToggleContext);

// const fetchImages = async (name) => {
//   if (name) {
//     const link = `gs://portfolio23-84a31.appspot.com/${name}`;
//     const imageRef = ref(storage, link);
//     const images = await list(imageRef);
//     const imageLists = await Promise.all(
//       images.items.map(async (img) => {
//         const imgRef = ref(storage, `gs://portfolio23-84a31.appspot.com/${img.fullPath}`);
//         const url = await getDownloadURL(imgRef);
//         return { src: url };
//       })
//     );
//     return imageLists;
//   }
// };

//   const fetchProject = async () => {
//     await getDocs(collection(firestore, 'Projects')).then(async (querySnapshot) => {
//       const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//       const sortedData = newData.sort((a, b) => a.order - b.order);
//       setProjects(sortedData);

//       // const images = await Promise.all(
//       //   sortedData?.map(async (project) => {
//       //     const imageLists = await fetchImages(project.name);
//       //     return { imageLists };
//       //   })
//       // );
//       // setImages(images);
//       setIsFetching(false);
//     });
//   };

//   useEffect(() => {
//     setIsFetching(true);
//     fetchProject();
//   }, []);
