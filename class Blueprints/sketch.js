const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var  ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1=new box(200,100,50,50);
    ground=new ground(200,370,400,10);
    box2=new box(190,50,25,25)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
   ground.display();
}