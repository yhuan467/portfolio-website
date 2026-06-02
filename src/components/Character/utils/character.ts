import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>((resolve, reject) => {
      let character: THREE.Object3D;
      const tuneMaterial = (material: THREE.Material) => {
        const standardMaterial = material as THREE.MeshStandardMaterial;
        if ("metalness" in standardMaterial) {
          standardMaterial.metalness = 0;
        }
        if ("roughness" in standardMaterial) {
          standardMaterial.roughness = 0.92;
        }
        if ("envMapIntensity" in standardMaterial) {
          standardMaterial.envMapIntensity = 0.18;
        }
        standardMaterial.needsUpdate = true;
      };

      const normalizeCharacter = (target: THREE.Object3D) => {
        const initialBox = new THREE.Box3().setFromObject(target);
        if (initialBox.isEmpty()) return;

        const initialSize = initialBox.getSize(new THREE.Vector3());
        const targetHeight = 10;

        if (initialSize.y > 0) {
          const scaleFactor = targetHeight / initialSize.y;
          target.scale.multiplyScalar(scaleFactor);
        }

        const normalizedBox = new THREE.Box3().setFromObject(target);
        if (normalizedBox.isEmpty()) return;

        const normalizedCenter = normalizedBox.getCenter(new THREE.Vector3());
        target.position.x -= normalizedCenter.x;
        target.position.z -= normalizedCenter.z;
        target.position.y -= normalizedBox.min.y;
      };

      loader.load(
        "/models/walking-avatar.glb",
        async (gltf) => {
          character = gltf.scene;
          await renderer.compileAsync(character, camera, scene);
          character.traverse((child: any) => {
            if (child.isMesh) {
              const mesh = child as THREE.Mesh;
              child.castShadow = false;
              child.receiveShadow = false;
              mesh.frustumCulled = false;
              if (mesh.material) {
                if (Array.isArray(mesh.material)) {
                  mesh.material.forEach((material) => tuneMaterial(material));
                } else {
                  (mesh.material as THREE.ShaderMaterial).precision = "mediump";
                  tuneMaterial(mesh.material);
                }
              }
            }
          });

          normalizeCharacter(character);

          const rightFoot = character.getObjectByName("footR");
          const leftFoot = character.getObjectByName("footL");
          if (rightFoot) rightFoot.position.y = 3.36;
          if (leftFoot) leftFoot.position.y = 3.36;

          resolve(gltf);
          setCharTimeline(character, camera);
          setAllTimeline();
          dracoLoader.dispose();
        },
        undefined,
        (error) => {
          console.error("Error loading GLTF model:", error);
          reject(error);
        }
      );
    });
  };

  return { loadCharacter };
};

export default setCharacter;
