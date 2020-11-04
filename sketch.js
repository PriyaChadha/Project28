const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Tree;

var ground;

var Stone;

var boy, boyImage;

var mango, mango2, mango3, mango4, mango5, mango6;

var launch;

function preload() {
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Tree = new tree(width/2, 400, 400, 600);

	ground = new Ground(width/2, 690, width, 20);

	Stone = new stone(150, 560, 25);

	boy = createSprite(200, 620);
	boy.addImage("boy", boyImage);
	boy.scale = 0.1;

	mango = new Mango(850, 140);

	mango2 = new Mango(575 + 180, 315);

	mango3 = new Mango(640 + 180, 190);

	mango4 = new Mango(570 + 180, 200);

	mango5 = new Mango(675 + 180, 270);

	mango6 = new Mango(485 + 180, 310);

	launch = new launcher(Stone.body, {x: 150, y: 567.5});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  rectMode(CENTER);

  Tree.display();

  ground.display();

  Stone.display();

  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  launch.display();

  detectColission(Stone, mango);
  detectColission(Stone, mango2);
  detectColission(Stone, mango3);
  detectColission(Stone, mango4);
  detectColission(Stone, mango5);
  detectColission(Stone, mango6);
  
  drawSprites();
 
}

function keyPressed() {
	if (key == 'r') {
		Body.setPosition(Stone.body, {x: 150, y: 560});
		launch.attach(Stone.body);
	}
}

function mouseDragged() {
	if (launch.constraint.bodyA) {
		Body.setPosition(Stone.body, { x: mouseX, y: mouseY });
	}
}

function mouseReleased() {
	launch.fly();
}

function detectColission(stone, mangoObj) {
	let distance = dist(stone.body.position.x, stone.body.position.y, mangoObj.body.position.x, mangoObj.body.position.y);
	console.log(stone.radius);
	if (distance <= stone.radius + mangoObj.radius) {
		Body.setStatic(mangoObj.body, false);
	}
}