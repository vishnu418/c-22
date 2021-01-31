const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ball, ground;


function setup() {


  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world;
var balloptions={
  restitution:3
}
  ball=Bodies.circle(100,50,10,balloptions);
  World.add(world,ball);
  var groundoptions={
    isStatic:true
  }
  ground=Bodies.rectangle(250,300,400,100,groundoptions);
  World.add(world,ground);

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  circle(ball.position.x,ball.position.y,10);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,100);
}