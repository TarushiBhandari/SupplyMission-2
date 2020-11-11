var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var log1,log2,log3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	var package_options={
		restitution:1.0
	};
	packageSprite=createSprite(width/2, 80, 10,10,package_options);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);

	log1= new Box(500,600,20,100);
	log2= new Box(390,630,200,20);
	log3= new Box(300,600,20,100);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}

function draw() {

	Engine.update(engine);
	background(0);
	packageSprite.x= packageBody.position.x ;
	packageSprite.y= packageBody.position.y ;
	log1.display();
	log2.display();
	log3.display();
	rectMode(CENTER);
	rect(ground.position.x,ground.position.y,700,20);
	keyPressed();
	drawSprites();
	
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody,false);
	Matter.Body.setStatic(packageBody, false);
	packageSprite.x= packageBody.position.x ;
	packageSprite.y= packageBody.position.y ;
	}
}
