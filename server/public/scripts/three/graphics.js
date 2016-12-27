var renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('mainCanvas'),
  antialias: true
});

// set background color
renderer.setClearColor(0x000);

// set canvas size
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
var testCubemat = new THREE.MeshLambertMaterial({color: 0xF3FFE2});

//set mesh
var mesh = new THREE.Mesh(testCubeGeom, testCubemat);
mesh.position.set(0, 0, -1000);
//scene.add(mesh);

var geometry = new THREE.SphereGeometry( 2, 10, 10 );
var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
var sphere = new THREE.Mesh( geometry, material );
sphere.position.set(0, 0, -1000);
scene.add(sphere);

requestAnimationFrame(render);

// RESIZES THREE TO MATCH VIEWPORT !!!!!
window.addEventListener( 'resize', onWindowResize, false );

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

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function plotStar(stars){

}
