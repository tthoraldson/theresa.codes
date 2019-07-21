const zPoint = -1000;

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

// Create a Cube Mesh with basic material
var geometry = new THREE.Geometry();
var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
//var cube = new THREE.Mesh( geometry, material );


geometry.vertices.push(new THREE.Vector3( randomWidth(),randomHeight(),zPoint ));
geometry.vertices.push(new THREE.Vector3( randomWidth(),randomHeight(),zPoint ));
geometry.vertices.push(new THREE.Vector3( randomWidth(),randomHeight(),zPoint ));
geometry.faces.push(new THREE.Face3(0, 1, 2));

var material = new THREE.MeshBasicMaterial({color: 0xFF0000, side: THREE.DoubleSide});

var triangle = new THREE.Mesh( geometry, material );


// Add cube to Scene
scene.add( triangle );

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  // Render the scene
  renderer.render(scene, camera);
};


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
