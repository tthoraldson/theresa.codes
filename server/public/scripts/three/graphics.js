// uncomment window.innerHeight for dev round II



//////////////////////
// GLOBAL VARIABLES //
//////////////////////
var starID = 1;

//////////////
// THREE.js //
//////////////

var renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('mainCanvas'),
  antialias: true
});


// set background color
renderer.setClearColor(0x000);

// set canvas size
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight /*- (window.innerHeight * 0.1)*/);

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
var testCubemat = new THREE.MeshLambertMaterial({color: 0xF3FFE2});

//set mesh
var mesh = new THREE.Mesh(testCubeGeom, testCubemat);
mesh.position.set(0, 0, -1000);
//scene.add(mesh);

requestAnimationFrame(render);

// RESIZES THREE TO MATCH VIEWPORT !!!!!
window.addEventListener( 'resize', onWindowResize, false );

initStars();

// cool line code stuff
// var material = new THREE.LineBasicMaterial({
//   color: 0xffffff
// });
// var geometry = new THREE.Geometry();
// geometry.vertices.push(new THREE.Vector3(10, 0, -1000));
// geometry.vertices.push(new THREE.Vector3(0, 10, -1000));
// geometry.vertices.push(new THREE.Vector3(10, 100, -100));
// var line = new THREE.Line(geometry, material);
// scene.add(line);

////////////////////////////
// FUNCTION FUN ZONEEEEEE //
////////////////////////////

// cute lil rotate function
function render(){
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

// actively updates window on resize
function onWindowResize(){

    camera.aspect = window.innerWidth / (window.innerHeight /*- (window.innerHeight * 0.1)*/);
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, (window.innerHeight /*- (window.innerHeight * 0.1)*/));

}

// random numbers woooooooooo!
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

// Create a new star object
function newStar(){
  var geometry = new THREE.SphereGeometry( 2, 10, 10 );
  var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
  var sphere = new THREE.Mesh( geometry, material );
  sphere.name = 'jim' + starID;
  sphere.position.set(randomWidth(), randomHeight(), -1000);
  scene.add(sphere);
}

// Render
function initStars(){
  // star ID identifies each unique star
  var starID = 1;
  for (var i = 0; i < 20; i++){
    newStar();
    starID++;
  }
}

var foundObject = scene.getObjectByName('jim');
console.log(foundObject);
