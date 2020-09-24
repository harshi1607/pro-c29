
var block1,block2,block3,block4,block5,block6,block7,block8,
    block9,block10,block11,block12,block13,block14,block15,
    stand,polygon,polygonImg;
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies  
const Constraint = Matter.Constraint

function preload(){

}

function setup() {
  createCanvas(1200,800);
  engine= Engine.create();
  world= engine.world;
  polygon= new Polygon(300,200,100)
  //polygon.addImage("download",polygonImg)
  stand= new Stand(690,300,400,20)

  block1= new Box(600,255,50,50)
  block2= new Box(650,255,50,50)
  block3= new Box(700,255,50,50)
  block4= new Box(750,255,50,50)
  block5= new Box(800,255,50,50)
  block6= new Box(620,205,50,50)
  block7= new Box(670,205,50,50)
  block8= new Box(720,205,50,50)
  block9= new Box(770,205,50,50)
  block10= new Box(645,155,50,50)
  block11= new Box(695,155,50,50)
  block12= new Box(745,155,50,50)
  block13= new Box(670,105,50,50)
  block14= new Box(720,105,50,50)
  block15= new Box(695,55,50,50)

  slingshot= new SlingShot(polygon.body,{x:300,y:220});
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  polygon.display();
  slingshot.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}