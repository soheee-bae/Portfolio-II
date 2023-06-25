import { useGLTF } from '@react-three/drei';

function AboutObjects() {
  return (
    <group scale={[1.5, 1.5, 1.5]} dispose={null}>
      <Book />
      <HeadPhone />
      <Plant />
      <Cactus />
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

function HeadPhone(props) {
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/headphones/model.gltf'
  );
  scene.traverse(function (node) {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });
  return <primitive object={scene} scale={0.3} position={[0, 0, 2]} {...props} />;
}

function Plant(props) {
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/plant/model.gltf'
  );
  scene.traverse(function (node) {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });
  return <primitive object={scene} scale={0.3} position={[0, 0, 1]} {...props} />;
}

function Cactus(props) {
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cactus/model.gltf'
  );

  scene.traverse(function (node) {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });
  return <primitive object={scene} scale={0.3} position={[1, 0, 2]} {...props} />;
}
