var bullet,wall,speed,weight;
var damage,thickness

function setup() {
  createCanvas(1600,400);
 bullet= createSprite(50,200, 50, 50);
 wall = createSprite(1000,200,60,height/2);
  speed=random(55,90);
  thickness = random(22,88);
  weight=random(400,1500);
  bullet.velocityX = speed;
  damage = (0.5*speed*speed*weight)/(thickness*thickness*thickness);
}

function draw() {
  background("blue"); 
  if(bullet.collide(wall)){
    if(damage<10){
      wall.shapeColor = "green";
    }
    if(damage>10){
      wall.shapeColor = "red";

    }
  }
  drawSprites();
}