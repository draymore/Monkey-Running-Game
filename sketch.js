
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup, bananaGroup;
var score = 0;
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600, 600)
var monkey = createSprite(200, 200, 20, 20)
monkey.setAnimation("monkey", monkey_running)
var ground = createSprite(300, 590, 10, 600 )
ground.velocityX = -3

stroke("White")
textSize(25)  
fill("White")
text("Survival Time" + score, 500, 500)

stroke("black")
textSize(25)
fill("black")
survivalTime = Math.ceil(frameCount/frameRate()) 
text("Survival Time: "+ survivalTime, 100, 50);
}


function draw() {
if(keyDown("space")){
  monkey.velocityY = -3 
}
monkey.velocityY = monkey.velocityY + 0.8
if(ground.x<0){
  ground.x = ground.width/2 
}
monkey.collide(ground)  
drawSprites();
}



function food() {
if(frameCount%80===0){
 var banana = createSprite(300, 300, 20, 20)
 banana.y = Math.round(random(120,200))
  banana.setAnimation("banana", bananaImage)
  banana.lifetime = 300
  banana.velocityX = -4
  
  bananaGroup.add(banana)
}
  
}



function obstacle(){
if(frameCount%300===0) {
  var obstacles = createSprite(400, 200, 20, 20)
  obstacles.setAnimation("obstacles",obstacleImage)
  obstacles.lifetime = 300
  obstacles.velocityX = -5
  
} 
  
  
}









