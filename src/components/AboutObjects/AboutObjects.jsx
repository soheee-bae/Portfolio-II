import { useGLTF } from '@react-three/drei';

function AboutObjects() {
  return (
    <group scale={[1.5, 1.5, 1.5]} dispose={null}>
      <Book />
      {/* <HeadPhone /> */}
    </group>
  );
}

export default AboutObjects;

function Book(props) {
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/open-book/model.gltf'
  );
  scene.traverse(function (node) {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });
  return <primitive object={scene} scale={1} {...props} />;
}

// function HeadPhone(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/headphones/model.gltf'
//   );
//   return (
//     <group receiveShadow castShadow>
//       <primitive object={scene} castShadow scale={0.3} position={[0, 0, 2]} {...props} />
//     </group>
//   );
// }

// function HeadPhone(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/headphones/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }

// function Book(props) {
//   const { scene } =
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/open-book/model.gltf';
//   return <primitive object={scene} {...props} />;
// }

// function Plant(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/plant/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }

// function Cactus(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cactus/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }

// function Bread(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bread/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }

// function CandyBar(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/candy-bar-wrapper/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }

// function Coffee(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cup-tea/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }

// function Croissant(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/croissant/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }

// function Chocolate(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/chocolate-wrapper/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }

// function Cookie(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cookie/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }

// function CuttingBoard(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cutting-board-japanese/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }
