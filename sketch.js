var car1,car2,car3,car4,cars;
var database,gameState=0,playerCount;
var form,game,player,allPlayers;
var car1_img,car2_img,car3_img,car4_img,track;


function preload(){

car1_img = loadImage("images/car1.png");
car2_img = loadImage("images/car2.png");
car3_img  = loadImage("images/car3.png");
car4_img = loadImage("images/car4.png");
track = loadImage("./images/track.jpg");

}


function setup(){
    createCanvas(displayWidth-20,displayHeight-150);
   database = firebase.database(); 
   game = new Game();
game.getState();
game.start();
   
}

function draw(){
    background("white");

    if(playerCount===4){
        game.update(1);



    }

    if(gameState===1){
        clear();
        game.play();

    }

    if(gameState===2){

        console.log("gameEnd");

    }

    
}



