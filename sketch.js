var playerImg,obstracleImg,player,ground,obstracle,obstraclesGroup,score

function preload() {
  playerImg=loadAnimation("run1.png","run2.png","run3.png","run4.png")
  obstracleImg=loadImage("ob.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  player=createSprite(displayWidth/2,displayHeight/2+200)
  player.addAnimation("player",playerImg)
  player.scale=0.5
  ground=createSprite(displayWidth/2-100,displayHeight/2+300,displayWidth+1000,20)
  ground.shapeColor="brown"
  player.setCollider("circle",0,0,280)
  obstraclesGroup=new Group()
  score=0
}

function draw() {
  background("green");  
 drawSprites();
 player.collide(ground)
 if (keyWentDown(UP_ARROW)){
   player.velocityY=player.velocityY-20
 }

 ground.velocityX=-20
 fill("blue")
 textSize(25)
text("score: "+score,500,50)
 if (ground.x<0){
   ground.x=ground.width/2+80
 }
 player.velocityY=player.velocityY+0.8
 swapnObstracts()

 if (frameCount % 60==0){
   score=score+20
 }

 if (player.isTouching(obstraclesGroup)){
  obstraclesGroup.destroyEach()
  score=score-20
  
}
}
if (frameCount % 1800==0  && score<250){}
function swapnObstracts() {
if (frameCount%60==0) {
  obstracle=createSprite(displayWidth/2+600,displayHeight/2+250)
  obstracle.addImage(obstracleImg)
  obstracle.scale=0.3
  obstracle.velocityX=-20
obstraclesGroup.add(obstracle)
}
}
