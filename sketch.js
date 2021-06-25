const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
var ghost, form;
var gameState = "start";
var wall, wallGroup,coinGroup,pacman,button;
var PC, player, database;



function preload(){

  ghost_image = loadAnimation("pac-man-images/frame1.png","pac-man-images/frame2.png",
  "pac-man-images/frame3.png","pac-man-images/frame4.png",
  "pac-man-images/frame5.png","pac-man-images/frame6.png",
  "pac-man-images/frame7.png", "pac-man-images/frame8.png")
  
  coinImage = loadImage("pac-man-images/coin.PNG")

  pacmanImage = loadAnimation("pac-man-images/pac1.png","pac-man-images/pac2.png","pac-man-images/pac3.png","pac-man-images/pac4.png",
  "pac-man-images/pac5.png")
}

function setup() {
  createCanvas(600, 1200);
  database = firebase.database();
  engine = Engine.create();
  world = engine.world;
  
  ghost = createSprite(300,400,20,20);
  ghost.addAnimation("running", ghost_image);
  ghost.scale = 0.09;

  pacman = createSprite(530,1130);
  pacman.addAnimation("running", pacmanImage);
  pacman.scale = 0.3

  wallGroup = new Group();

  coinGroup = new Group();

  form = new Form();
  
 
  wall1 = new Ground(10,277,20,565)
  wall2 = new Ground(10,923,20,565)
  wall3 = new Ground(590,277,20,565)
  wall4 = new Ground(590,923,20,565)  
  wall5 = new Ground(300,10,600,20)
  wall6 = new Ground(300,1190,600,20)
  wall7 = new Ground(270,100,20,70)
  wall8 = new Ground(330,100,20,70)
  wall9 = new Ground(270,1100,20,70)
  wall10 = new Ground(330,1100,20,70)
  wall11 = new Ground(300,300,20,50)
  wall12 = new Ground(300,900,20,50)
  wall13 = new Ground(300,600,20,100)
  wall14 = new Ground(100,100,20,70)
  wall15 = new Ground(145,76,70,20)
  wall16 = new Ground(187,100,20,70)
  wall17 = new Ground(400,100,20,70)
  wall18 = new Ground(445,76,70,20)
  wall19 = new Ground(487,100,20,70)
  wall20 = new Ground(100,1100,20,70)
  wall21 = new Ground(145,1124,70,20)
  wall22 = new Ground(187,1100,20,70)
  wall23 = new Ground(400,1100,20,70)
  wall24 = new Ground(445,1124,70,20)
  wall25 = new Ground(487,1100,20,70)
  wall26 = new Ground(50,300,100,20)
  wall27 = new Ground(50,900,100,20)
  wall28 = new Ground(550,300,100,20)
  wall29 = new Ground(550,900,100,20)
  wall30 = new Ground(200,320,20,120)
  wall31 = new Ground(151,380,120,20)
  wall32 = new Ground(400,320,20,120)
  wall33 = new Ground(449,380,120,20)
  wall34 = new Ground(200,880,20,120)
  wall35 = new Ground(151,820,120,20)
  wall36 = new Ground(400,880,20,120)
  wall37 = new Ground(449,820,120,20)

  coin1 = new Coin(200,200);
  coin2 = new Coin(200,1000);
  coin3 = new Coin(400,1000);
  coin4 = new Coin(400,200);
  coin5 = new Coin(50,50);
  coin6 = new Coin(50,1150);
  coin7 = new Coin(550,50);
  coin8 = new Coin(550,1150);
  coin9 = new Coin(225,50);
  coin10 = new Coin(375,50);
  coin11 = new Coin(225,1150);
  coin12 = new Coin(150,340);
  coin13 = new Coin(450,340);
  coin14 = new Coin(450,860);
  coin15 = new Coin(150,860);
  coin16 = new Coin(375,1150);
  

}

function draw() {
  background(255);
  Engine.update(engine);

 
 if(gameState ==="start") {
  form.display();
  
 }
 
  if (gameState === "play") {
    play();
   // player.getPlayerInfo();
    ghost.collide(wallGroup);
    pacman.collide(wallGroup);

     if(PC !== undefined) {

      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in PC){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          circle(x,y,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }
    
    if(keyIsDown(UP_ARROW)) {
      //  ghost.y = ghost.y - 10;
        player.update(0,-10);
      }
    
      if(keyIsDown(DOWN_ARROW)) { 
      //  ghost.y = ghost.y + 10;
        player.update(0,10);
      }
    
      if(keyIsDown(RIGHT_ARROW)) {
      //  ghost.x = ghost.x + 10;
        player.update(10,0);
      }
    
      if(keyIsDown(LEFT_ARROW)) {
      //  ghost.x = ghost.x - 10;
        player.update(-10,0);
      }
    }
  }
  
  /* if(keyIsDown(UP_ARROW)) {
  //  ghost.y = ghost.y - 10;
    player.update(0,-10);
  }

  if(keyIsDown(DOWN_ARROW)) { 
  //  ghost.y = ghost.y + 10;
    player.update(0,10);
  }

  if(keyIsDown(RIGHT_ARROW)) {
  //  ghost.x = ghost.x + 10;
    player.update(10,0);
  }

  if(keyIsDown(LEFT_ARROW)) {
  //  ghost.x = ghost.x - 10;
    player.update(-10,0);
  } */
  




  
  
}

function play() {
  // form.hide();
Player.getPlayerInfo();

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  wall13.display();
  wall14.display();
  wall15.display();
  wall16.display();
  wall17.display();
  wall18.display();
  wall19.display();
  wall20.display();
  wall21.display();
  wall22.display();
  wall23.display();
  wall24.display();  
  wall25.display();
  wall26.display();
  wall27.display();
  wall28.display();
  wall29.display();
  wall30.display();
  wall31.display();
  wall32.display();
  wall33.display();
  wall34.display();
  wall35.display();
  wall36.display();
  wall37.display(); 
  
  
  
  
  drawSprites();
}


