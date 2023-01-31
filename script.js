//set up the gameboard module
let gameboardModule = function() {
    let gameboard = [];
    return {gameboard};
    
}();

//setting up display controller module

let displayControlModule = (function(){
   const clickBoxes =   document.querySelectorAll(".cb");
   
   for(let i =0; i < 9; i++){
    clickBoxes[i].addEventListener("click", gmBrd, false );  //sends the index number to be accessed by this
    //console.log(clickBoxes[i].value);
  

   }
   


} )();

//creating player 
let createPlayer =(playerName, playerNumber, chosenSign) => {
    let getPlayerName = () => {playerName ;
        console.log("This is player number :" + playerNumber + "named" + playerName);
    }
    return {getPlayerName,playerName,playerNumber,chosenSign};

}
 let i = 0;
 function gmBrd(){
    
    let grdbx = document.querySelectorAll(".box");

    if(i % 2 == 0)
    gameboardModule.gameboard[this.value] = "X";
    else{
     gameboardModule.gameboard[this.value] = "O" ;
    }
    
    
    grdbx[this.value].textContent = gameboardModule.gameboard[this.value]; // gets the index number
   console.log(gameboardModule.gameboard) 
    i++;      // alternate between X and O
    gamePlay();
}

let abhishek = createPlayer("abhishek", 1, "x");
let M = createPlayer("m", 2, "o");
 
function gamePlay(){   //adding game logic
    
    for(let j = 0; j < 9; j++){
      if(gameboardModule.gameboard[j] == "X")
      if (  (gameboardModule.gameboard[j] == gameboardModule.gameboard[j+1] && gameboardModule.gameboard[j+1]==gameboardModule.gameboard[j+2]) ||(gameboardModule.gameboard[j] == gameboardModule.gameboard[j+3] && gameboardModule.gameboard[j+3] == gameboardModule.gameboard[j+6]))
      console.log(" X wins")  ;
      else if(gameboardModule.gameboard[j] == "O")
      if (  (gameboardModule.gameboard[j] == gameboardModule.gameboard[j+1] && gameboardModule.gameboard[j+1]==gameboardModule.gameboard[j+2]) ||(gameboardModule.gameboard[j] == gameboardModule.gameboard[j+3] && gameboardModule.gameboard[j+3] == gameboardModule.gameboard[j+6]))
      console.log(" O wins")  ;
    }
}
