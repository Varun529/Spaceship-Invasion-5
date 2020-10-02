//sprite variables
var bg, warrior, enemy, playButton, cannon1, cannon2, cannon3, bullet1, bullet2, bullet3, edges;
//image variables
var spaceShipInsideBg, firstPageBg, warriorImg, wallImg, cannonImg, bulletImg; 

var gameState="start";



function preload()
{
	firstPageBg=loadImage("images/firstpg2.jpg");
	warriorImg=loadImage("images/warrior.png");
	spaceShipInsideBg=loadImage("images/Spaceship Invasion level background drawings.jpg");
	cannonImg=loadImage("images/cannon2.png");
	bulletImg=loadImage("images/cannon bullet.png")

	//wallImg=loadImage("images/wall.png");
}

function setup() {
	createCanvas(displayWidth, displayHeight);
	bg=createSprite(displayWidth/2,displayHeight/2,width+600,height);
	bg.addImage("fp",firstPageBg);
	bg.addImage("lvl",spaceShipInsideBg);
	bg.scale=1.3;
	
	playButton = createButton('Play');
	playButton.style("width","75px");
	playButton.style("height","50px");
	playButton.style("background-color","green");
	playButton.visible=false;
	warrior=createSprite(displayWidth/2-500,displayHeight/2+300);
	
	warrior.addImage("blue",warriorImg);
	warrior.scale=0.15;
	warrior.visible=false;
	
	edges=createEdgeSprites();

	cannon1=createSprite(displayWidth/2-200,displayHeight/2-300);
	cannon1.addImage("c1",cannonImg);
	cannon1.scale=0.2;
	cannon1.visible=false;
	bullet1=createSprite()


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(gameState==="start"){
	
	playButton.position(displayWidth/2-30, displayHeight/2+250);
	playButton.mousePressed(()=>{
	  
	  gameState="level1";	
	});
  }

  if(gameState==="level1"){
	playButton.hide();  
	warrior.visible=true;
	cannon1.visible=true;
	bg.changeImage("lvl",spaceShipInsideBg);
	if(keyIsDown(UP_ARROW)){
		warrior.y +=-7;
	}
	if(keyIsDown(DOWN_ARROW)){
		warrior.y+=7;
	}
	if(keyIsDown(RIGHT_ARROW)){
		warrior.x+=7;
	}
	if(keyIsDown(LEFT_ARROW)){
		warrior.x+=-7;
	}
	warrior.collide(cannon1);
  }
  warrior.collide(edges);
  drawSprites();
 
}



