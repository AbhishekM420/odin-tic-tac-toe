//creating player 
let createPlayer = (playerName, playerNumber, chosenSign) => {
    let getPlayerName = () => {playerName ;
        console.log("This is player number :" + playerNumber + "named" + playerName);
    }
    return {getPlayerName,playerName,playerNumber,chosenSign};

};


//set up the gameboard module
let gameboardModule = function() {
    let gameboard = [];
    playerOneTwo();
    return {gameboard};
    
    
}();

//setting up display controller module

let displayControlModule = (function(){
   const clickBoxes =   document.querySelectorAll(".cb");
   
   for(let i =0; i < 9; i++){
    clickBoxes[i].addEventListener("click", gmBrd, false );  //sends the index number to be accessed by this
    //console.log(clickBoxes[i].value);
  
   }
   
   return{clickBoxes};  //exporting butons so that they can be removed once the game is won


} )();


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
    gamePlay(); //calling game logic to check if the game has been won
}


 
function gamePlay(){   //adding game logic
    
    const result = document.getElementById("result");

    
    for(let j = 0; j < 9; j++){
      if(gameboardModule.gameboard[j] == "X")
      if (  (gameboardModule.gameboard[j] == gameboardModule.gameboard[j+1] && gameboardModule.gameboard[j+1]==gameboardModule.gameboard[j+2]) ||(gameboardModule.gameboard[j] == gameboardModule.gameboard[j+3] && gameboardModule.gameboard[j+3] == gameboardModule.gameboard[j+6]))
     {
        result.textContent = PlayerOne.playerName + "  wins";
        stopGame();
     }
      
     if(gameboardModule.gameboard[j] == "O")
      if (  (gameboardModule.gameboard[j] == gameboardModule.gameboard[j+1] && gameboardModule.gameboard[j+1]==gameboardModule.gameboard[j+2]) ||(gameboardModule.gameboard[j] == gameboardModule.gameboard[j+3] && gameboardModule.gameboard[j+3] == gameboardModule.gameboard[j+6]))
     {
        result.textContent = PlayerTwo.playerName + "   wins" ;
        stopGame();
  
     }
     else if(gameboardModule.gameboard.length == 9 && gameboardModule.gameboard.includes(undefined) != true){
        result.textContent = "Tie" ;
        stopGame();
   
     }
    }
}
                                     
function stopGame(){                                     //Removing buttons once game is over
   displayControlModule.clickBoxes.forEach(clickBox => {
    clickBox.remove();
   })
}
const reset = document.getElementById("reset");
reset.addEventListener("click",reload =()=> {
    location.reload();
})
var PlayerOne;
var PlayerTwo;

function playerOneTwo(){
   let  pOneName = prompt("Enter Player One Name");
   window.alert(`${pOneName} is Player One And Your Sign is X`);

   let pTwoName = prompt("Enter Player Two Name");                      //creating player objects and assigning their signs and names
   window.alert(`${pTwoName} is Player Two And Your Sign is O`);

    PlayerOne = createPlayer(pOneName, 1, "X");
   console.log(PlayerOne.chosenSign)
    PlayerTwo = createPlayer(pTwoName, 2, "O");

   return{PlayerOne,PlayerTwo};
}
