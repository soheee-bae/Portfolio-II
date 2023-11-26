import React from 'react';
import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
  const project = await getProject(params.contactId);
  return { project };
}

function SubProject() {
  const { project } = useLoaderData();

  // const [images, setImages] = useState([]);

  const sliderRef = useRef();
  const { isLightMode } = useContext(ToggleContext);

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

  const fetchProject = async () => {
    await getDocs(collection(firestore, 'Projects')).then(async (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const sortedData = newData.sort((a, b) => a.order - b.order);
      setProjects(sortedData);

      // const images = await Promise.all(
      //   sortedData?.map(async (project) => {
      //     const imageLists = await fetchImages(project.name);
      //     return { imageLists };
      //   })
      // );
      // setImages(images);
      setIsFetching(false);
    });
  };

  useEffect(() => {
    setIsFetching(true);
    fetchProject();
  }, []);

  return <div></div>;
}

export default SubProject;
