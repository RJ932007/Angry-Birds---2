const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine,ground,box1,box2,box3,box4,box5,bird,log1,log2,log3,log4,pig1,pig2,bg;


function preload(){

    bg=loadImage("sprites/bg.png");

}
function setup(){
  
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    ground= new Ground(600,590,1200,20);

    box1 = new Box(800,530,70,70);
    box2 = new Box(1050,530,70,70);
    
    pig1= new Pigs(925,550);

    log1 = new Log(925,500,20,320,PI/2);

    box3 = new Box(800,450,70,70);
    box4 = new Box(1050,450,70,70);
    box5 = new Box(920,360,70,70);

    pig2= new Pigs(925,460);

    log2 = new Log(925,400,20,320,PI/2);
    log3 = new Log(840,370,20,145,PI/7);
    log4 = new Log(1010,370,20,145,-PI/7);

    bird = new Bird(200,200);
    
}

function draw(){

    background(bg);

    Engine.update(engine);

    text(mouseX,200,50);
    text(mouseY,200,100);
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
    
    bird.display();
}


































