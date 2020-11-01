function setup() {
  createCanvas(1600,400);
  var wall,car;
  var speed,weight;
speed=random(55,90)
weight=random(400,1500)
car=createSprite(50,200,50,50)
wall=createSprite(1500,200,60,height/2)
wall.shapeColor=("green")
}

function draw() {
  background("pink");  
  drawSprites();
}