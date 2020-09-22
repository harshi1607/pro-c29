
var block1,block2,block3,block4,block5,block6,block7,block8,
    block9,block10,block11,block12,block13,block14,block15,
    stand,polygon;
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies  
const Constraint = Matter.Constraint

function setup() {
  createCanvas(800,400);
  engine= Engine.create;
  world= engine.world
 
  //stand= new Stand(390,240,200,20)
  block1= new Box(330,235,30,40)
  block2= new Box(360,235,30,40)
  block3= new Box(390,235,30,40)
  block4= new Box(420,235,30,40)
  block5= new Box(450,235,30,40)





  
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  //stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  drawSprites();
}