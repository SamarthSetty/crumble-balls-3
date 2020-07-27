
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var  gameState ="onSling";

function preload()
{
	dustbinImage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,450,40);
	ground=new Ground(800,670,1600,20);
	dustbin1=new Dustbin(900,650,200,20);
	dustbin2=new Dustbin(790,620,20,80);
	dustbin3=new Dustbin(1010,620,20,80);
    launcher = new Launcher(paper.body,{x:200,y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  image(dustbinImage,900,580,80,80); 
paper.display();
ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
launcher.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-150});
		gameState="onSling"
	}
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    launcher.fly();
    gameState = "launched";
}

