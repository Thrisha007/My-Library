var fixedRect, movingRect;
var object1, object2;
var gameObject1, gameObject2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,200,80,20);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100,50,50,50);
  gameObject1.shapeColor = "green";
  gameObject1.velocityY = 3;

  gameObject2 = createSprite(100,300,50,50);
  gameObject2.shapeColor = "green";
  gameObject2.velocityY = -4;

}

function draw() {
  background(255,255,255); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(gameObject1, movingRect)){
  gameObject1.shapeColor = "red";
  movingRect.shapeColor = "red";
 }
 else{
  gameObject1.shapeColor = "green";
  movingRect.shapeColor = "green";
 }
  
  bounce(gameObject1,gameObject2);

  drawSprites();
}

