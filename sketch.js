const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine, world;
var border1,border2,border3,border4;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(525,800);
  engine = Engine.create();
  world = engine.world;

  border1= createSprite(2,height/2,5,800);
  border1.shapeColor="brown";

  border2= createSprite(522,height/2,5,800);
  border2.shapeColor="brown";

  border3= createSprite(width/2,2,525,5);
  border3.shapeColor="brown";

  border4= createSprite(width/2,798,525,5);
  border4.shapeColor="brown";

  ground= new Ground(width/2,791,468,8);

  for(var i = 0; i <=width; i = i + 80){
    divisions.push(new Divisions(i, height - divisionHeight/2, 10, divisionHeight));
  }

  /*for(var j = 75; j <=width; j = j+50)
  {
      plinkos.push(new Plinko(j,75));
  }

  for(var j = 50; j <=width-10; j = j+50)
  {
      plinkos.push(new Plinko(j,175));
  }*/

  for (var j = 75; j <=width; j=j+60) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+60) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+60) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+60) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}

function draw() {
  background(0);
  Engine.update(engine);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for( var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  drawSprites();

  ground.display();

}