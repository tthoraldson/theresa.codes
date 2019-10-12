  ////////////////////////////
 // Application Parameters //
////////////////////////////
const triangleCount = 15;
const zPoint = -1000;
const maxVelocity = 0.5;
let controls;
var objectList = [];


// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 3000 );

// Create Raycaster, Mouse
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
window.addEventListener( 'mousemove', onMouseMove, false );


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

for (var i=0; i<triangleCount; i++){
  objectList.push(createTriangle())
}

render();

  ///////////////
 // Functions //
///////////////

function render() {
  requestAnimationFrame( render );

  raycaster.setFromCamera( mouse, camera );

  // var intersects = raycaster.intersectObjects( scene.children );
  //
  //
  // for ( var i = 0; i < intersects.length; i++ ) {
	// 	intersects[i].object.material.color.set( 0xff0000 );
	// }


  for (x=0; x<triangleCount; x++){
    objectList[x].geometry.verticesNeedUpdate = true;
    for (var i=0; i<3; i++){
      objectList[x].geometry.vertices[i].x += movements(x, i, objectList[x].geometry.vertices[i].x, objectList[x].futurePosition[i].x) * objectList[x].velocites[i].x;
      objectList[x].geometry.vertices[i].y += movements(x, i, objectList[x].geometry.vertices[i].y, objectList[x].futurePosition[i].y) * objectList[x].velocites[i].y;
    }
  }

  // Render the scene
  renderer.render(scene, camera);
};

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

// random width, according to device width
function randomWidth(){
  return getRandomNum(-( window.innerWidth/2), (window.innerWidth/2));
}

// random height, according to decice height
function randomHeight(){
  return getRandomNum(-( window.innerHeight/2), (window.innerHeight/2))
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

function movements(x, i, currentPosition, futurePosition) {
  if (Math.abs(currentPosition - futurePosition) <= 1) {
    objectList[x].geometry.verticesNeedUpdate = true;
    objectList[x].futurePosition[i].x = randomWidth();
    objectList[x].futurePosition[i].y = randomHeight();
    objectList[x].velocites[i] = createVelocity();
    // console.log(objectList[x].velocites);
    return 0
  } else {
    if (currentPosition - futurePosition > 0){
      return -1
    } else {
      return 1
    }
  }
}

function initVelocities(){
  return [createVelocity(),
          createVelocity(),
          createVelocity()]
}

function createVelocity(){
  return {x: getRandomNum(0.01, maxVelocity), y: getRandomNum(0.01, maxVelocity)}
}

function createTriangle(){
  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3( randomWidth(),randomHeight(),zPoint ));
  geometry.vertices.push(new THREE.Vector3( randomWidth(),randomHeight(),zPoint ));
  geometry.vertices.push(new THREE.Vector3( randomWidth(),randomHeight(),zPoint ));
  geometry.faces.push(new THREE.Face3(0, 1, 2));

  var material = new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide, wireframe: true,  wireframeLinewidth: 1});

  var triangle = new THREE.Mesh( geometry, material );

  scene.add( triangle );
  triangle.verticesNeedUpdate = true;
  triangle.futurePosition = [ new THREE.Vector3(randomWidth(),randomHeight(),zPoint),
                              new THREE.Vector3(randomWidth(),randomHeight(),zPoint),
                              new THREE.Vector3(randomWidth(),randomHeight(),zPoint)  ];

  triangle.velocites = initVelocities();

  return triangle
}

function onMouseMove( event ) {
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}
