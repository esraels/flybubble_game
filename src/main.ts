import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75, // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping plane
  1000 // Far clipping plane
);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

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

// Cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshNormalMaterial(); // Simple material that maps normal vectors to RGB colors
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();