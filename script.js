//set up the gameboard module
let gameboardModule = function() {
    let gameboard = ["X"];
    return {gameboard};
    
}();

//setting up display controller module

let displayControlModule = (function(){
    let testkk = () => {console.log("this works")};
    return {testkk};

} )();

//creating player 
let createPlayer =(playerName, playerNumber, chosenSign) => {
    let getPlayerName = () => {playerName ;
        console.log("This is player number :" + playerNumber + "named" + playerName);
    }
    return {getPlayerName,playerName,playerNumber,chosenSign};

}

let renderGmBrd = function(){
    let grdbx = document.querySelectorAll(".box");
    grdbx[5].textContent = gameboardModule.gameboard;
}();

let abhishek = createPlayer("abhishek", 1, "x");
let M = createPlayer("m", 2, "o");
let test = displayControlModule();