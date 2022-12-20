// Background of the page using ThreeJS
import * as THREE from "https://unpkg.com/three@0.120.1/build/three.module.js";

function init() {
  //
  const camera = new THREE.PerspectiveCamera(
    27,
    window.innerWidth / window.innerHeight,
    5,
    3500
  );
  camera.position.z = 4000;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050505);
  scene.fog = new THREE.Fog(0x050505, 2000, 3500);

  //

  const particles = 1000000;

  const geometry = new THREE.BufferGeometry();

  const positions = [];
  const colors = [];

  const color = new THREE.Color();

  const n = 3000,
    n2 = n / 2; // particles spread in the cube

  for (let i = 0; i < particles; i++) {
    // positions

    const x = Math.random() * n - n2;
    const y = Math.random() * n - n2;
    const z = Math.random() * n - n2;

    positions.push(x, y, z);

    // colors

    const vx = x / n + 0.5;
    const vy = y / n + 0.5;
    const vz = z / n + 0.5;

    color.setRGB(vx, vy, vz);

    colors.push(color.r, color.g, color.b);
  }

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

  geometry.computeBoundingSphere();

  //

  const material = new THREE.PointsMaterial({ size: 5, vertexColors: true });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  window.addEventListener("resize", onWindowResize);

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  const container = document.getElementById("background");
  const canvas = document.getElementById("canvas");
  document.body.appendChild(canvas);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.001;

    points.rotation.x = time * 0.018;
    points.rotation.z = time * 0.019;

    renderer.render(scene, camera);
  }

  animate();
}

init();
//~~~~~~~~~~~~~~~~ END THREE.JS~~~~~~~~~~~~~~~~~~~~~~~~

const coverPage = document.querySelector("#coverPage");

setTimeout(function () {
  coverPage.remove();
}, 3800);
