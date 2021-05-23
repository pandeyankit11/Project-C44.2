var bg,blastImg,badge1,badge2,badge3,helicopter,wall;
var form,game,player,password;
var gameState =0;
function preload (){
  bg =loadImage("images/bg.jpg");
  blastImg =loadImage("images/blast.png");
  badge1 =loadImage("images/badge1.jpg");
  badge2 =loadImage("images/badge2.jpg");
  badge3 =loadImage("images/badge3.png");
  helicopter =loadImage("images/helicopter.png");
  wall =loadImage("images/wall.jpg");
 password =loadImage("images/pass.jpg");

}




function setup() {
  createCanvas(1530,740);
  
  game =new Game();
  game.start();





  
}

function draw() {
  
  if(gameState ===0){
  background(bg);
  }

if(gameState ===1){
  
  
  background(password);
  game.play();
}



  
  drawSprites();
}