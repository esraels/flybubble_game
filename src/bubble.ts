import * as THREE from 'three';

export default class Bubble extends THREE.Mesh{
    

    constructor(texture: THREE.Texture) {

        // const mat2 = new THREE.MeshToonMaterial();

        const physMat = new THREE.MeshPhysicalMaterial({
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
        //super(geometry, normMat);

        //const geometry = new THREE.SphereGeometry( 20, 64, 32 );
				// const texture = new THREE.CanvasTexture( Bubble.generateTexture() );
				// texture.magFilter = THREE.NearestFilter;
				// texture.wrapT = THREE.RepeatWrapping;
				// texture.wrapS = THREE.RepeatWrapping;
				// texture.repeat.set( 1, 3.5 );

        const params = {
          color: 0xffffff,
          transmission: 1,
          opacity: 1,
          metalness: 0,
          roughness: 0,
          ior: 1.5,
          thickness: 0.01,
          specularIntensity: 1,
          specularColor: 0xffffff,
          envMapIntensity: 1,
          lightIntensity: 1,
          exposure: 1,
          transmissionResolutionScale: 1
        };

				const material = new THREE.MeshPhysicalMaterial( {
					color: params.color,
					metalness: params.metalness,
					roughness: params.roughness,
					ior: params.ior,
					//alphaMap: texture,
					envMap: texture,
					envMapIntensity: params.envMapIntensity,
					transmission: params.transmission, // use material.transmission for glass materials
					specularIntensity: params.specularIntensity,
					specularColor: params.specularColor,
					opacity: params.opacity,
					side: THREE.DoubleSide,
					transparent: true
				} );

        super(geometry, material);


    }

    update(dt: number){
        this.rotation.x += 0.005;
        this.rotation.y += 0.005;
    }


    // static generateTexture() {

    //   const canvas = document.createElement( 'canvas' );
    //   canvas.width = 2;
    //   canvas.height = 2;

    //   const context = canvas.getContext( '2d' );
    //   context.fillStyle = 'white';
    //   context.fillRect( 0, 1, 2, 1 );

    //   return canvas;

    // }

  }