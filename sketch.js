var bgImage;
var cat1,cat1img,cat2img,cat4img;
var canvas;
var mouse1,mouse1img;
var mouse2img;
var mouse4img;

function preload() {
    //load the images here

    bgImage=loadImage("images/garden.png");
    cat1img=loadAnimation("images/cat1.png");
    cat2img=loadAnimation("images/cat2.png","images/cat3.png");
    cat4img=loadAnimation("images/cat4.png");
    mouse1img=loadAnimation("images/mouse1.png");
    mouse2img=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse4img=loadAnimation("images/mouse4.png");
}

function setup(){
  canvas= createCanvas(1000,800);
    //create tom and jerry sprites here
  
     cat1=createSprite(810,600,10,10);
     cat1.addAnimation("cat",cat1img);
     cat1.scale=0.2;
     
    
     mouse1=createSprite(200,600,10,10);
     mouse1.addAnimation("animal",mouse1img);
     mouse1.scale=0.2;

}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
   
    if(cat1.x-mouse1.x<(cat1.width-mouse1.width)/2){
      cat1.velocityX=0;
      cat1.addAnimation("last",cat4img);
      cat1.scale=0.2;
      cat1.x=300;
      cat1.changeAnimation("last");
      

      mouse1.addAnimation("end",mouse4img);
      mouse1.scale=0.2;
      mouse1.changeAnimation("end");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   
   if(keyCode===LEFT_ARROW){
      cat1.addAnimation("walking",cat2img);
      cat1.velocityX=-2;
      cat1.changeAnimation("walking");
      mouse1.addAnimation("change",mouse2img);
      mouse1.frameDelay=25;
      mouse1.changeAnimation("change");
   }

  

}
