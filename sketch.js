var ship, ship_moving
var sea

function preload(){
  ship_moving = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage ("sea.png");
}



sea = createSprite(200,400,400,20,)
seaImg = addImage("sea",seaImg);

ship = createSprite(150,150,20,50)
shipImg = addAnimation("moving", ship_moving);





function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("white");
 
}