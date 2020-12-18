var bullet, wall, thickness;
var speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);
  
  bullet=createSprite(0, 200, 75, 20);
  bullet.shapeColor='white';
  speed=random(223, 321);
  bullet.velocityX = speed;
  weight=random(30, 52);

  wall=createSprite(1200, 200, 10, 200);
  wall.shapeColor='white';
  thickness=random(22, 83);
  wall.width=thickness;
}

function draw() {
  background(0, 0, 0);
  
  if (h()){
    //to stop bullet
    bullet.velocityX=0;
    //change color of wll
    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
    if (damage<10){
      wall.shapeColor='green';
    }
    if (damage>=10){
      wall.shapeColor='red';
    }
  }
  
  drawSprites();
}

function h(){
  //only left-right collission
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  } else {
    return false;
  }
}
/*
if (wall.x-bullet.x<bullet.width/2+wall.width/2 && bullet.x-wall.x<bullet.width/2+wall.width/2 && wall.y-bullet.y<wall.height/2+bullet.height/2 && bullet.y-wall.y<wall.height/2+bullet.height/2){
  return true;
} else{
  return false;
}
*/