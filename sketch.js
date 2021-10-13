var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  doorsGroup= new Group();
  climbersGroup=new Group();
  invisibleBlockGroup = new Group();

}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale=0.5;
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
if(keyDown("left_arrow"))
{
  ghost.x=ghost.x-3;
}
if(keyDown("right_arrow"))
{
  ghost.x=ghost.x+3;
}
if(keyDown("space"))
{
  ghost.velocityY=-5
}
ghost.velocityY=ghost.velocityY+0.8;
if (climbersGroup.isTouching(ghost))
{
  ghost.velocity=0;
}
spawnDoors();
    drawSprites();
   


}
function spawnDoors()
{
 if(frameCount% 240===0){
   var Door= createSprite(200,-50);
   Door.addImage(doorImg);
    Door.x=Math.round(random(120,400));
    Door.velocityY=5;
    ghost.depth=door.depth;
    ghost.depth=ghost.depth+1;
    Door.lifetime=800;
    doorsGroup.add(Door);
    var climber = createSprite(200,10);
    climber.x = Door.x;
    climber.addImage(climberImg);
    climber.velocityY = 1;
climber.lifetime = 800;
climbersGroup.add(climber);
var invisibleBlock = createSprite(200,15);
 invisibleBlock.width = climber.width;
  invisibleBlock.height = 2;
invisibleBlock.x = door.x;
invisibleBlock.velocityY = 1;
invisibleBlock.lifetime = 800;
invisibleBlock.debug = true;
invisibleBlockGroup.add(invisibleBlock); 


 }

}
