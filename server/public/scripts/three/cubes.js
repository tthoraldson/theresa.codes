//////////////////////
// GLOBAL VARIABLES //
//////////////////////
var starID = 1;

////////////////////////////
// THREE.js Boiler Plate! //
///////////////////////////

var renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('mainCanvas'),
  antialias: true
});


// set background color
renderer.setClearColor(0x000);

// set canvas size
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight /*- (window.innerHeight * 0.1)*/);

// set camera perspective
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
// camera.position.set(0, 0, 0);

// set scene
var scene = new THREE.Scene();

// set light
var light1 = new THREE.AmbientLight(0xFFFFFF, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xFFFFFF, 0.5);
scene.add(light2);

// RESIZES THREE TO MATCH VIEWPORT !!!!!
window.addEventListener( 'resize', onWindowResize, false );



/////////////////////
// Custom Three.js //
/////////////////////

// // create cube
// var testCubeGeom = new THREE.BoxGeometry(100, 100, 100);
// var testCubemat = new THREE.MeshLambertMaterial({color: 0xF3FFE2});
//
// //set mesh
// var mesh = new THREE.Mesh(testCubeGeom, testCubemat);
// mesh.position.set(0, 0, -1000);
// scene.add(mesh);



var material = new THREE.LineBasicMaterial({
  color: 0xffffff
});
var geometry = new THREE.Geometry();

geometry.vertices.push(new THREE.Vector3(10, 10, -1000));
geometry.vertices.push(new THREE.Vector3(10, 100, -100));
var line = new THREE.Line(geometry, material);

scene.add(line);


/////////////////////
// RENDER Three.js //
/////////////////////

requestAnimationFrame(render);


//////////////
// FUNCTIONS//
//////////////

//cute lil rotate function
function render(){
  // mesh.rotation.x += 0.01;
  // mesh.rotation.y += 0.01;

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
