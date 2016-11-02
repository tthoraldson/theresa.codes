var renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('mainCanvas'),
  antialias: true
});

renderer.setClearColor(0x457585);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// set camera
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
// camera.position.set(0, 0, 0);

// set scene
var scene = new THREE.Scene();

// set light
var light1 = new THREE.AmbientLight(0xFFFFFF, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xFFFFFF, 0.5);
scene.add(light2);

// create cube
var testCubeGeom = new THREE.BoxGeometry(100, 100, 100);

// set material
var testCubemat = new THREE.MeshLambertMaterial({color: 0xF3FFE2});

// set mesh
var mesh = new THREE.Mesh(testCubeGeom, testCubemat);
mesh.position.set(0, 0, -1000);
scene.add(mesh);

var mesh2 = new THREE.Mesh(testCubeGeom, testCubemat);
mesh2.position.set(0, 200, -1000);
scene.add(mesh2);

var mesh3 = new THREE.Mesh(testCubeGeom, testCubemat);
mesh3.position.set(0, -200, -1000);
scene.add(mesh3);

requestAnimationFrame(render);

function render(){
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  mesh2.rotation.x += 0.01;
  mesh2.rotation.y += 0.01;

  mesh3.rotation.x += 0.01;
  mesh3.rotation.y += 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
