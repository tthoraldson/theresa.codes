//////////////////////
// GLOBAL VARIABLES //
//////////////////////
var points = [];


////////////////////////////
// THREE.js Boiler Plate! //
////////////////////////////

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

generatePoints();

// var material = new THREE.LineBasicMaterial({
//   color: 0xffffff
// });
// var geometry = new THREE.Geometry();
//
// geometry.vertices.push(new THREE.Vector3(10, 10, -100));
// geometry.vertices.push(new THREE.Vector3(10, 100, -100));
// var line = new THREE.Line(geometry, material);
//
// scene.add(line);


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

// generates 21 random points determined by window width and height
function generatePoints(){
  for (var i = 0; i < 21; i++){
    var tempPointArray = [];
    tempPointArray.push(randomWidth());
    tempPointArray.push(randomHeight());
    points.push(tempPointArray);
  }
}

// Create a new star object
function newStar(){
  var geometry = new THREE.SphereGeometry( 2, 10, 10 );
  var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
  var sphere = new THREE.Mesh( geometry, material );
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
