import * as THREE from 'three';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import Bubble from './bubble';
import bg_image from './images/bg_game.png';
import bg_equirect from './images/equirectangular.png';
import bg_equirect_bubble from './images/bg_equirect_bubble.png';


// Scene
const scene = new THREE.Scene();
const clock = new THREE.Clock();

// Camera
const camera = new THREE.PerspectiveCamera(
  75, // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping plane
  1000 // Far clipping plane
);
//camera.position.y = 2;
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true});
//renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
//renderer.shadowMap.enabled = true;
//renderer.toneMapping = THREE.ACESFilmicToneMapping;
//renderer.toneMappingExposure = 1;

// Append renderer to the DOM
const container = document.getElementById('canvas-container');
if (container) {
  container.appendChild(renderer.domElement);
} else {
  console.error('Canvas container not found!');
}

// Handle window resize
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setSize(width, height);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

const textureLoader = new THREE.TextureLoader();
const bgTexture = textureLoader.load(bg_image, () => {
  console.log('Background image loaded');
});

scene.background = bgTexture;
scene.backgroundIntensity = 0.1;

const planeGeom = new THREE.BoxGeometry(10,10,1);
const planeMat = new THREE.MeshBasicMaterial();


const theBubble = new Bubble(bgTexture);
theBubble.position.y = -1.5;
scene.add(theBubble);


// const loader = new THREE.TextureLoader();
// loader.load(bg_equirect_bubble, function (texture) {
//   texture.mapping = THREE.EquirectangularReflectionMapping;
//   scene.background = texture; // Optional: Set as scene background
//   scene.environment = texture; // Use as environment map for materials
// });

const loaderTexBubble = new THREE.TextureLoader();
loaderTexBubble.load(bg_equirect_bubble, function (texture) {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  theBubble.setEVMap(texture);
});




// Ambient light for general illumination
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambientLight);

// Point light to create highlights and reflections
const pointLight = new THREE.PointLight(0xffffff, 100);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const rectLight = new THREE.RectAreaLight(0xffffff, 200, 10,2);
rectLight.position.set(-10, 10, 10);
scene.add(rectLight);

// var floorTexture = new THREE.ImageUtils.loadTexture( 'images/checkerboard.jpg' );
// 	floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping; 
// 	floorTexture.repeat.set( 10, 10 );
// 	var floorMaterial = new THREE.MeshBasicMaterial( { map: floorTexture, side: THREE.DoubleSide } );
// 	var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
// 	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
// 	floor.position.y = -50.5;
// 	floor.rotation.x = Math.PI / 2;
// 	scene.add(floor);


// Animation Loop
function animate() {
  requestAnimationFrame(animate);


  const deltaTime = clock.elapsedTime;

  theBubble.update(deltaTime);

  renderer.render(scene, camera);
}

animate();