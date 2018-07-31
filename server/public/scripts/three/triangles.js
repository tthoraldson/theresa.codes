//////////////////////
// GLOBAL VARIABLES //
//////////////////////
var points = [];
var tempWidth;
var tempHeight
var segmentCount;

// SET MAX POINTS TO A NUMBER DIVISABLE BY 3!!!
var maxPoints = 42;

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
initStars();
connectStars();



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

// decide pixel adjustment
function xMovement(axis, point){
  tempArray = [-1, 0, 1]
  tempNumber = tempArray[Math.floor(Math.random() * tempArray.length)];
  if (axis = "x") {
    if (-( window.innerHeight / 2.7) < (tempNumber + point) < -( window.innerHeight / 2.7)){
      return tempNumber
    }
  }
  if (axis = "y") {
    if (-( window.innerWidth / 2.7) < (tempNumber + point) < -( window.innerWidth / 2.7)){
      return tempNumber
    }
  }
}


// generates 21 random points determined by window width and height
function generatePoints(){
  for (var i = 0; i < maxPoints; i++){
    var tempPointArray = [];
    tempPointArray.push(randomWidth());
    tempPointArray.push(randomHeight());
    points.push(tempPointArray);
  }
}

// Create a new star object based on a point from the points array
function newStar(){
  var geometry = new THREE.SphereGeometry( 2, 5, 5 );
  var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
  var sphere = new THREE.Mesh( geometry, material );
  sphere.position.set(tempWidth, tempHeight, -1000);
  scene.add(sphere);
}

// Render all stars based on newStar function
function initStars(){
  // star ID identifies each unique star
  var starID = 1;
  for (var i = 0; i < maxPoints; i++){
    tempWidth = points[i][0];
    tempHeight = points[i][1]
    newStar();
  }
}

// Create line segments between three points (illumanati confirmed...)!
function connectStars(){
  for (var i = 0; i < maxPoints; i += 3){
    var point1 = points[i];
    var point2 = points[i + 1];
    var point3 = points[i + 2];

    var material = new THREE.LineBasicMaterial({
      color: 0xffffff
    });
    var geometry = new THREE.Geometry();

    // segment between point 1 && 2
    geometry.vertices.push(new THREE.Vector3(point1[0], point1[1], -1000));
    geometry.vertices.push(new THREE.Vector3(point2[0], point2[1], -1000));
    var line = new THREE.Line(geometry, material);
    scene.add(line);

    // segment between point 2 && 3
    geometry.vertices.push(new THREE.Vector3(point2[0], point2[1], -1000));
    geometry.vertices.push(new THREE.Vector3(point3[0], point3[1], -1000));
    line = new THREE.Line(geometry, material);
    scene.add(line);

    // segment between point 3 && 1
    geometry.vertices.push(new THREE.Vector3(point3[0], point3[1], -1000));
    geometry.vertices.push(new THREE.Vector3(point1[0], point1[1], -1000));
    line = new THREE.Line(geometry, material);
    scene.add(line);
  }
}


/// super beta stuff right here
// generates 21 random points determined by window width and height
function xgeneratePoints(){
  for (var i = 0; i < maxPoints; i++){
    tempStarObject = pointObject;
    tempStarObject.id = i;
    points.push(tempStarObject);
  }
}

function xconnectStars(){
  for (var i = 0; i < maxPoints; i += 3){
    var point1 = points[i];
    var point2 = points[i + 1];
    var point3 = points[i + 2];

  }
  for (var i = 0; i < maxPoints; i++){
    var temp = pointObject;
    points.push(temp);
  }

  var material = new THREE.LineBasicMaterial({
    color: 0xffffff
  });
  var geometry = new THREE.Geometry();

  // segment between point 1 && 2
  geometry.vertices.push(new THREE.Vector3(point1.x, point1.y, -1000));
  geometry.vertices.push(new THREE.Vector3(point2.x, point2.y, -1000));
  var line = new THREE.Line(geometry, material);
  scene.add(line);

  // segment between point 2 && 3
  geometry.vertices.push(new THREE.Vector3(point2.x, point2.y, -1000));
  geometry.vertices.push(new THREE.Vector3(point3.x, point3.y, -1000));
  line = new THREE.Line(geometry, material);
  scene.add(line);

  // segment between point 3 && 1
  geometry.vertices.push(new THREE.Vector3(point3.x, point3[1], -1000));
  geometry.vertices.push(new THREE.Vector3(point1[0], point1[1], -1000));
  line = new THREE.Line(geometry, material);
  scene.add(line);
}

var pointObject = {
  id: 0,
  x: randomWidth(),
  y: randomHeight(),
  fullName : function() {
      this.x = 0;
      this.y = 0;
  }
}


console.log(pointObject);
