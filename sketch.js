//project 20 by Mayank

var bullet,speed, weight; 
var wall, thickness;

function setup() {
  createCanvas(1600, 400);
 

  //random values for speed and weight
  speed = random(55, 90);
  weight = random(400, 1500)
  thickness = random(22,83)

  //creating bullet and wall and giving values
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;


  wall = createSprite(1200, 200, thickness, height / 2);
  wall.debug = true;
  wall.collide(bullet);




}

function draw() {
  background(255, 255, 255);
  drawSprites();

  //collision detection
  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0
    var damage = 0.5 * weight * speed * speed /(thickness * thickness *thickness);

    
    if (damage > 10) {
      wall.shapeColor = color(255, 0, 0);
    }

    if (damage < 10) {
      wall.shapeColor = color(0, 255, 0);
    }

  }

}
function hasCollided(lBullet,lWall){
  bulletRightEdge = lBullet.x + lBullet.width;
  wallLeftEdge = lWall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;

}