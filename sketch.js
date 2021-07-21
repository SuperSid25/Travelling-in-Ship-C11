var ship, ship_moving,seaImage;
var sea,shipImg;

function preload(){
  seaImage = loadImage ("sea.png");
  ship_moving = loadAnimation ("ship-1.png","ship-2.png","ship-3.png");
  
}

function setup(){
  createCanvas(1200,550);
  //adding scale and position to ship
  sea = createSprite(200,180,400,20);
  sea.addImage("sea",seaImage);
  sea.x = sea.width/2;
  ship = createSprite(640,300,640,300);
  ship.addAnimation("running", ship_moving);
 ship.scale = 0.5;
 ship.x = 50

}

function draw() {
  background(220);
  
  sea.velocityX = -2
  console.log(sea.x)
  drawSprites();
  
}
