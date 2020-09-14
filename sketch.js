const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1500, 700);
    engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	dustbin1 = new Bin(1100,550,200,15);
  dustbin2 = new Dustbin(1000,420,15,250);
  dustbin3 = new Dustbin(1200,420,15,250);
  ground1 = new Ground(750,550,1500,15);
  ball = new Ball(100,520,15);
  }
function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbin2.display();
  dustbin3.display();
  ball.display();
  dustbin1.display();
  ground1.display();
 }
function keyPressed(){
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-55});
  }
}
