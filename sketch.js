const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball1,ball2,platform;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world; 

    //creating the ground
    ground = new Ground(400,590,850,20);


    // creating circle
    Circle1= new Circle(50,390,30);
    Circle2= new Circle(150,380,40);

    Circle3= new Circle(350,380,20);
    Circle4= new Circle(450,350,50);
    Circle5= new Circle(665,340,20);

// creating box
    Box1 = new Box(50,500,50,165);
    Box2 = new Box(150,500,60,165);
    Box3 = new Box(350,490,60,185);
    Box4 = new Box(450,490,100,185);
    Box5 = new Box(670,470,60,225);
    

}

function draw(){
  background(0);
  Engine.update(engine);
  ground.display();
  Circle1.display();
  Circle2.display();
  Circle3.display();
  Circle4.display();
  Circle5.display();

  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  
}