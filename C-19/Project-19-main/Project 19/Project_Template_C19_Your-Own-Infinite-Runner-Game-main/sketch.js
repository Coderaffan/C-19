var rocket,rock,rock2;
var rocketImg,rockImg,rockImg2;
var background_inf
var rock_group

function preload(){
 bk=loadImage("bk.jpg")
  rocketImg = loadImage("rocket.jpg");
  rockImg = loadImage("rock.jpg");
  rock2Img = loadImage("rock2.jpg");
}


function setup(){
  
  createCanvas(400,600);
background_inf= createSprite(200,300,400,600)
background_inf.addImage(bk)
rock_group= new Group()
rocket = createSprite(160,340,20,20);

rocket.addImage(rocketImg);
rocket.scale =0.3;

}

function draw() {
  background("white");
  

  
  
  edges= createEdgeSprites();
  rocket.collide(edges);
  
   drawSprites();
   
 if(rocket.collide(rock_group)){
  //rocket.destroy()
 
  background('black')
   text("GameOver",200,200)
   rocket.x=0
 }
// else{
  rocket.x = World.mouseX;
  background_inf.velocityY=5
if(background_inf.y>400){
  background_inf.y=300
  
}
createrock2() 
// }

 

 
  
    
  

}

function createrock2() {
  if (frameCount % 50 == 0) {
  rock2 = createSprite(random(50, 350),40, 10, 10);
  rock2.addImage(rock2Img);
  rock2.scale=0.2;
  rock2.velocityY = 3;
rock2.lifetime = 150;
rock_group.add(rock2)
  } 
}



