var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xa0a0a0 );

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 100 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function animate() {
	requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();

camera.position.x = 0.9;
camera.position.y = 1;
camera.position.z = 4;
camera.rotation.y = 0.7;

var material = new THREE.MeshNormalMaterial( {} );
var material2 = new THREE.MeshBasicMaterial( { color: "black" } );

var geometry = new THREE.BoxGeometry( 1, 2, 0.2 );
var handle1 = new THREE.Mesh( geometry, material );
scene.add( handle1 );
handle1.position.set( 0, 0, 0.2 );

var handle2 = new THREE.Mesh( geometry, material );
scene.add( handle2 );
handle2.position.set( 0, 0, -0.2 );

var geometry2 = new THREE.BoxGeometry( 0.2, 2, 0.4 );
var handle3 = new THREE.Mesh( geometry2, material );
scene.add( handle3 );
handle3.position.set( 0.5, 0, 0 );

var handle4 = new THREE.Mesh( geometry2, material );
scene.add( handle4 );
handle4.position.set( -0.5, 0, 0 );

var geometry3 = new THREE.BoxGeometry( 0.8, 0.1, 0.2 );
var trigger1 = new THREE.Mesh( geometry3, material );
scene.add( trigger1 );
trigger1.position.set( -0.8, 0.5, 0 );

var geometry4 = new THREE.BoxGeometry( 0.1, 0.5, 0.2 );
var trigger2 = new THREE.Mesh( geometry4, material );
scene.add( trigger2 );
trigger2.position.set( -1.2, 0.8, 0 );

var geometry5 = new THREE.BoxGeometry( 0.1, 0.4, 0.1 );
var trigger3 = new THREE.Mesh( geometry5, material );
scene.add( trigger3 );
trigger3.position.set( -0.8, 0.8, 0 );

var geometry6 = new THREE.BoxGeometry( 5, 0.2, 0.6 );
var bottom1 = new THREE.Mesh( geometry6, material );
scene.add( bottom1 );
bottom1.position.set( -1.8, 1.1, 0 );

var geometry7 = new THREE.BoxGeometry( 5, 0.8, 0.3 );
var bottom2 = new THREE.Mesh( geometry7, material );
scene.add( bottom2 );
bottom2.position.set( -1.8, 1.5, 0 );

var geometry8 = new THREE.BoxGeometry( 0.4, 0.6, 0.2 );
var bottom3 = new THREE.Mesh( geometry8, material );
scene.add( bottom3 );
bottom3.position.set( 0.8, 1.5, 0 );

var geometry9 = new THREE.BoxGeometry( 5.2, 0.2, 0.6 );
var top1 = new THREE.Mesh( geometry9, material );
scene.add( top1 );
top1.position.set( -1.9, 2, 0 );

var geometry10 = new THREE.BoxGeometry( 5.2, 0.8, 0.2 );
var top2 = new THREE.Mesh( geometry10, material );
scene.add( top2 );
top2.position.set( -1.9, 1.5, 0.2 );

var top3 = new THREE.Mesh( geometry10, material );
scene.add( top3 );
top3.position.set( -1.9, 1.5, -0.2 );

var geometry12 = new THREE.CylinderGeometry( 0.1, 0.1, 0.2, 32 );
var barrel = new THREE.Mesh(  geometry12, material2 );
scene.add( barrel );
barrel.rotation.z += 1.5708;
barrel.position.set( -4.4, 1.6, 0 );

var geometry13 = new THREE.BoxGeometry( 2, 8, 6 );
var wall = new THREE.Mesh( geometry13, material );
scene.add( wall );
wall.position.set( -10, 0, 0 );

var geometry12 = new THREE.CylinderGeometry( 0, 0.1, 0.2, 32 );
var bullet = new THREE.Mesh(  geometry12, material2 );
scene.add( bullet );
bullet.rotation.z += 1.5708;
bullet.position.set( -4.3, 1.6, 0 );

var abc = 0;
var def = 0;

var inter1, inter2, inter3;
setInterval(function(){
    inter1 = setInterval(shot, 5);
}, 1000);
function shot() {
    if ( abc < 1 ) {
        top1.position.x += 0.05;
        top2.position.x += 0.05;
        top3.position.x += 0.05;
        trigger3.position.x += 0.005;
        abc += 0.05;
    } else if ( abc >= 1 ) {
        clearInterval(inter1);
        abc = 0;
        inter2 = setInterval(function(){
            if ( abc < 1 ) {
                top1.position.x -= 0.05;
                top2.position.x -= 0.05;
                top3.position.x -= 0.05;
                trigger3.position.x -= 0.005;
                abc += 0.05;    
            } else if ( abc >= 1 ) {
                clearInterval(inter2);
                abc = 0;
            }
        }, 5);
        inter3 = setInterval(function(){
            if ( def <= 6 ) {
                bullet.position.x -= 1;
                def += 1;
            } else {
                bullet.position.set( -4.3, 1.6, 0 );
                clearInterval(inter3);
                def = 0;
            }
        },5);
    }
}

window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 38) {                          //up key
        camera.position.z -= 0.1; //go foreward
    } else if (code === 40) {                   //down key
        camera.position.z += 0.1; //go backwards
    } else if ( code === 39 ) {                 //right key
		camera.position.x += 0.1; //go right
	} else if ( code === 37 ) {                 //left key
		camera.position.x -= 0.1; //go left
    } else if ( code === 87 ) {                 //w key
        camera.rotation.x += 0.1; //look up
    } else if ( code === 83 ) {                 //s key
        camera.rotation.x -= 0.1; //look down
    } else if ( code === 68 ) {                 //d key
        camera.rotation.y -= 0.1; //look right
    } else if ( code === 65 ) {                 //a key
        camera.rotation.y += 0.1; //look left
    } else if ( code === 82 ) {                 //r key
        camera.position.y += 0.1; //go up
    } else if ( code === 70 ) {                 //f key
        camera.position.y -= 0.1; //go down
    }
}