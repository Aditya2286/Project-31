const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var border1,border2,border3,border4;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  border1= createSprite(2,height/2,5,800);
  border1.shapeColor="brown";

  border2= createSprite(478,height/2,5,800);
  border2.shapeColor="brown";

  border3= createSprite(width/2,2,480,5);
  border3.shapeColor="brown";

  border4= createSprite(width/2,798,480,5);
  border4.shapeColor="brown";

  ground= new Ground(width/2,791,468,8);

}

function draw() {
  background(0);
  Engine.update(engine);

  for(var i = 0; i <=width; i = i + 80){
    divisions.push(new Divisions(i, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for( var k = 0; k < divisions.length; k++){
    //divisions[k].display();
  }

  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  /*for(var j = 40; j <=width; j = j+50)
  {
      plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <=width-10; j = j+50)
  {
      plinkos.push(new Plinko(j,175));
  }*/

  drawSprites();

  ground.display();

}