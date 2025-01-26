import * as THREE from 'three';

export default class Bubble extends THREE.Mesh{
    

    constructor(texture: THREE.Texture) {

        const mat2 = new THREE.MeshToonMaterial();

        const material = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0,
            roughness: 0,
            transmission: 1,
            opacity: 0.25,
            transparent: true,
            side: THREE.DoubleSide,
            clearcoat: 1,
            clearcoatRoughness: 0,
            reflectivity: 1,
            //envMap: texture, // Use the loaded environment map
          });

        const geometry = new THREE.SphereGeometry();
        const normMat = new THREE.MeshStandardMaterial({
          wireframe: true,
        });
        super(geometry, normMat);

    }

    showWireFrame() {


    }

    update(dt: number){
        this.rotation.x += 0.005;
        this.rotation.y += 0.005;
    }

    setReflectTexture(texture: THREE.Texture) {

    }

  }