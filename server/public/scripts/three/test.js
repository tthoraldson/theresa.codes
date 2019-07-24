const zPoint = -1000;
let controls;
var objectList = [];


// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 3000 );
//camera.position.z = 4;

// set lights
var light1 = new THREE.AmbientLight(0xFFFFFF, 0.5);
var light2 = new THREE.PointLight(0xFFFFFF, 0.5);
scene.add(light1);
scene.add(light2);

// RESIZES THREE TO MATCH VIEWPORT !!!!!
window.addEventListener( 'resize', onWindowResize, false );

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('mainCanvas'),
  antialias: true
});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3( randomWidth(),randomHeight(),zPoint ));
geometry.vertices.push(new THREE.Vector3( randomWidth(),randomHeight(),zPoint ));
geometry.vertices.push(new THREE.Vector3( randomWidth(),randomHeight(),zPoint ));
geometry.faces.push(new THREE.Face3(0, 1, 2));

var material = new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide, wireframe: true,  wireframeLinewidth: 5});

var triangle = new THREE.Mesh( geometry, material );

scene.add( triangle );
triangle.verticesNeedUpdate = true;
triangle.futurePosition = [new THREE.Vector3(randomWidth(),randomHeight(),zPoint), new THREE.Vector3(randomWidth(),randomHeight(),zPoint), new THREE.Vector3(randomWidth(),randomHeight(),zPoint)];
triangle.geometry.vertices
console.log(triangle.geometry.vertices[0].x, triangle.futurePosition[0].x);

function init() {

};

function init() {

};

// Render Loop
function render() {
  requestAnimationFrame( render );
  triangle.geometry.verticesNeedUpdate = true;
  for (var i=0; i<triangle.geometry.vertices.length; i++){
    triangle.geometry.vertices[i].x += movements(i, triangle.geometry.vertices[i].x, triangle.futurePosition[i].x);
    triangle.geometry.vertices[i].y += movements(i, triangle.geometry.vertices[i].y, triangle.futurePosition[i].y);
  }
  // Render the scene
  renderer.render(scene, camera);
};

init();
render();

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

// random width, according to device width
function randomWidth(){
  return getRandomNum(-( window.innerWidth / 2.7), (window.innerWidth / 2.7));
}

// random height, according to decice height
function randomHeight(){
  return getRandomNum(-( window.innerHeight / 2.7), (window.innerHeight / 2.7))
}

function randomPoint(){
  var array = [randomWidth(), randomHeight(), zPoint];
  return array;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function createControls() {
  controls = new THREE.OrbitControls(camera, container)
}

function movements(i, currentPosition, futurePosition) {
  if (Math.abs(currentPosition - futurePosition) <= 1) {
    triangle.geometry.verticesNeedUpdate = true;
    triangle.futurePosition[i].x = randomWidth();
    triangle.futurePosition[i].y = randomHeight();
    console.log(triangle.futurePosition);
    return 0
  } else {
    if (currentPosition - futurePosition > 0){
      return -1
    } else {
      return 1
    }
  }
}
