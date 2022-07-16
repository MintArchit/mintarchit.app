import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.js'
import {OrbitControls} from 'OrbitControls'

// scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffaa);

// Lights

// Floor
generateFloor();

// Model with Animations
new GLTFLoader().load('models/Soldier.glb', function (gltf) {
  const model = gltf.scene;
  model.traverse(function (object: any) {
    if (object.isMesh) object.castShadow = true;
  });
  scene.add(model);
});

// ControlKeys
const keysPressed = { }
const keyDisplayQueue = new KeyDisplay();
document.addEventListener('keydown', (event) => {
  keyDisplayQueue.down(event.key)
  if (event.shiftKey) {
    //toggle
  } else {
    (keysPressed as any)[event.key.toLowerCase()] = true
  }
}, false);
document.addEventListener('keyup', (event) =>)
