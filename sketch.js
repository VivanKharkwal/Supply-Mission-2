var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var line1, line2, line3;
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
	
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	line1 = createSprite(400, groundSprite.y+5, 200, 20, {isStatic:true});
	line1.shapeColor = color(255, 0, 0);
	line2 = createSprite(500, groundSprite.y-35, 20, 100, {isStatic:true});
	line2.shapeColor = color(255, 0, 0);
	line3 = createSprite(300, groundSprite.y-35, 20, 100, {isStatic:true});
	line3.shapeColor = color(255, 0, 0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:false});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	
		packageSprite.x= packageBody.position.x 
		packageSprite.y= packageBody.position.y 
	}
}

//When the mission starts, place a red box on top of the ground.
//The box has three sides of red color, which are static bodies.
//The bottom is a static body which is 20 pixels tall and 200 pixels wide.
//The sides are 100 pixels tall and 20 pixels wide.

