//set up the gameboard module
let gameboardModule = function() {
    let gameboard = ["X"];
    return {gameboard};
    
}();

//setting up display controller module

let displayControlModule = (function(){
   const clickBoxes = document.querySelectorAll(".cb");
   
   for(let i =0; i < 9; i++){
    clickBoxes[i].value = i;
    clickBoxes[i].addEventListener("click", gmBrd, false );  //sends the index number to be accessed by this
    console.log(clickBoxes[i].value);

   }
   
   

} )();

//creating player 
let createPlayer =(playerName, playerNumber, chosenSign) => {
    let getPlayerName = () => {playerName ;
        console.log("This is player number :" + playerNumber + "named" + playerName);
    }
    return {getPlayerName,playerName,playerNumber,chosenSign};

}

 function gmBrd(){
    let grdbx = document.querySelectorAll(".box");
    grdbx[this.value].textContent = gameboardModule.gameboard; // gets the index number
};

let abhishek = createPlayer("abhishek", 1, "x");
let M = createPlayer("m", 2, "o");
