const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


var background;

function preload(){

   
}
function setup(){
    var canvas = createCanvas(1200,400);
 
    engine = Engine.create();
    world = engine.world;

  ground=new Ground(600,400,1200,20);

  box1=new Box(600,390,80,80);
  box2=new Box(600,310,80,80);
  box3=new Box(600,230,80,80);
  box4=new Box(720,390,80,80);
  box5=new Box(720,310,80,80);
  box6=new Box(720,230,80,80);
    
  ball=new Ball(300,200,30);
  chain=new Slingshot(ball.body,{x:510,y:50})

}

function draw(){
   background("white");

    Engine.update(engine);
    ground.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   ball.display();
   chain.display();
}



function keyPressed(){
    if(keyCode===UP_ARROW){
      Matter.Body.applyForce(ball.body,ball.body.position,{x:-50,y:-45})
    }

    
}

 