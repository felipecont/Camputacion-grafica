var scene, camera, renderer, mesh, cub;
var meshFloor, ambientLight, light;

var keyboard = {};
var player = { height:1.8, speed:0.2, turnSpeed:Math.PI*0.02 };
var USE_WIREFRAME = false;

function init(){
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(90, 1280/720, 0.1, 1000);
	
	mesh = new THREE.Mesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({color:0xff4444, wireframe:USE_WIREFRAME})
	);
	
	var geometry = new THREE.BoxGeometry( 5, 15, 20 );
    var material = new THREE.MeshPhongMaterial( {color: 0xF2AF88, wireframe:USE_WIREFRAME} );
	var cube = new THREE.Mesh( geometry, material );
	scene.add( cube );
	cube.rotateY(1.6);
	cube.position.set(-15,0,-10);
	
	cube.receiveShadow = true;
	cube.castShadow = true;
	scene.add(mesh);
	
	//
	
	
	var geometry = new THREE.BoxGeometry( 5, 15, 20 );
    var material = new THREE.MeshPhongMaterial( {color: 0xF2AF88, wireframe:USE_WIREFRAME} );
	var cube = new THREE.Mesh( geometry, material );
	scene.add( cube );
	cube.rotateY(1.6);
	cube.position.set(-15,0,10);
	
	cube.receiveShadow = true;
	cube.castShadow = true;
	scene.add(mesh);
	
	//////////////////////////////
	
		
	var geometry = new THREE.BoxGeometry( 5, 0.5, 2 );
    var material = new THREE.MeshPhongMaterial( {color: 0xA08F73, wireframe:USE_WIREFRAME} );
	var cuber = new THREE.Mesh( geometry, material );
	scene.add( cuber );
	cuber.rotateY(1.57);
	cuber.position.set(-7,2.5,0);
	
	cuber.receiveShadow = true;
	cuber.castShadow = true;
	scene.add(mesh);
	
	//////////////////////
		var geometry = new THREE.BoxGeometry( 5, 15, 130 );
    var material = new THREE.MeshPhongMaterial( {color: 0xF2AF88} );
	var cube = new THREE.Mesh( geometry, material );
	scene.add( cube );
	cube.rotateY(0);
	cube.position.set(0,0,0);
	
	cube.receiveShadow = true;
	cube.castShadow = true;
	scene.add(mesh);
	
	///////////////////////
	
	var geometry = new THREE.ConeGeometry( 1.6, 1.2, 10 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFFCE0} );
var cone = new THREE.Mesh( geometry, material );
	cone.rotateY(0);
	cone.position.set(-5,10,0);
scene.add( cone );
	
	/////////////////
		var geometry = new THREE.ConeGeometry( 1.6, 1.2, 10 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFFCE0} );
var cone1 = new THREE.Mesh( geometry, material );
	cone1.rotateY(0);
	cone1.position.set(-10,10,0);
scene.add( cone1 );
	
	/////////////////
			var geometry = new THREE.ConeGeometry( 1.6, 1.2, 10 );
var material = new THREE.MeshBasicMaterial( {color: 0xFFFCE0} );
var cone2 = new THREE.Mesh( geometry, material );
	cone2.rotateY(0);
	cone2.position.set(-7,10,0);
scene.add( cone2 );
	
	/////////////////
	
	
	mesh.position.y += 5;
	// The cube can have shadows cast onto it, and it can cast shadows
	mesh.receiveShadow = true;
	mesh.castShadow = true;
	scene.add(mesh);
	
	meshFloor = new THREE.Mesh(
		new THREE.PlaneGeometry(50,50, 50,50),
		// MeshBasicMaterial does not react to lighting, so we replace with MeshPhongMaterial
		new THREE.MeshPhongMaterial({color:0xffffff, wireframe:USE_WIREFRAME})
		// See threejs.org/examples/ for other material types
		
		
	);
	meshFloor.rotation.x -= Math.PI / 2;
	// Floor can have shadows cast onto it
	meshFloor.receiveShadow = true;
	scene.add(meshFloor);
	
	
	//pared 1 fondo
	
	
	
	meshFloor = new THREE.Mesh(
		new THREE.PlaneGeometry(50,50, 10,10),
		// MeshBasicMaterial does not react to lighting, so we replace with MeshPhongMaterial
		new THREE.MeshPhongMaterial({color:0x42454A, wireframe:USE_WIREFRAME})
		// See threejs.org/examples/ for other material types
		
		
	);
	meshFloor.rotation.x -= Math.PI / 1;
	// Floor can have shadows cast onto it
	meshFloor.receiveShadow = true;
	meshFloor.position.z += 10;
	scene.add(meshFloor);
	
	
	//pared 2 fondo2 atras
	
	
	
	meshFloor = new THREE.Mesh(
		new THREE.PlaneGeometry(50,50, 10,10),
		// MeshBasicMaterial does not react to lighting, so we replace with MeshPhongMaterial
		new THREE.MeshPhongMaterial({color:0x42454A, wireframe:USE_WIREFRAME})
		// See threejs.org/examples/ for other material types
		
		
	);
	meshFloor.rotation.z -= Math.PI / 2;
	// Floor can have shadows cast onto it
	meshFloor.receiveShadow = true;
	meshFloor.position.z += -10;
	scene.add(meshFloor);
	
	
	//pared 3
	
	
	
	meshFloor = new THREE.Mesh(
		new THREE.PlaneGeometry(50,50, 10,10),
		// MeshBasicMaterial does not react to lighting, so we replace with MeshPhongMaterial
		new THREE.MeshPhongMaterial({color:0x42454A, wireframe:USE_WIREFRAME})
		// See threejs.org/examples/ for other material types
		
		
	);
	meshFloor.rotation.y -= Math.PI / 2;
	// Floor can have shadows cast onto it
	meshFloor.receiveShadow = true;
	meshFloor.position.x += 0;
	scene.add(meshFloor);
	
	// LIGHTS
	ambientLight = new THREE.AmbientLight(0xD3FFD9, 0.4);
	scene.add(ambientLight);
	
	light = new THREE.PointLight(0xffffff, 0.3, 18);
	light.position.set(-10,10,0);
	light.castShadow = true;
	// Will not light anything closer than 0.1 units or further than 25 units
	light.shadow.camera.near = 0.1;
	light.shadow.camera.far = 1;
	scene.add(light);
	
	//////////////////////////////////
	
		light1 = new THREE.PointLight(0xffffff, 0.3, 18);
	light1.position.set(-5,10,0);
	light1.castShadow = true;
	// Will not light anything closer than 0.1 units or further than 25 units
	light1.shadow.camera.near = 0.1;
	light1.shadow.camera.far = 1;
	scene.add(light1);
	
	/////////////////////////////////
	
	/*var lightq = new THREE.HemisphereLight( 0xffffbb, 0xF1C9FD, 0.3 );
scene.add( lightq );*/
	
	///////////////////////////////
	

	
		light2 = new THREE.PointLight(0xffffff, 0.3, 18);
	light2.position.set(-7,10,0);
	light2.castShadow = true;
	// Will not light anything closer than 0.1 units or further than 25 units
	light2.shadow.camera.near = 0.05;
	light2.shadow.camera.far = 1;
	scene.add(light2);
	
			//////////////////////////////////
	
	camera.position.set(0, player.height, -5);
	camera.lookAt(new THREE.Vector3(0,player.height,0));
	
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(1280, 720);
	
	// Enable Shadows in the Renderer
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.BasicShadowMap;
	
	document.body.appendChild(renderer.domElement);
	camera.rotateY(1.5708);
	animate();
}

function animate(){
	requestAnimationFrame(animate);
	

				
			camera.position.x = -15;
			camera.position.y = 5;
		  	camera.position.z = 0;

	
	renderer.render(scene, camera);
}

function keyDown(event){
	keyboard[event.keyCode] = true;
}

function keyUp(event){
	keyboard[event.keyCode] = false;
}

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

window.onload = init;
