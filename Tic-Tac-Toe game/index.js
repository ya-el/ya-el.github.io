let clicksCount = 0;
let playerTurn = 'x';
let gameArray = [];
let row1Array = ['', '', ''];
let row2Array = ['', '', ''];
let row3Array = ['', '', ''];
let clicker = playerTurn;
const xImg = '<img  src="images/x.png">';
const oImg = '<img  src="images/o.png">';
let imgPicked = '';
const startGameButton = document.querySelector('.js-start-game');
const endGameButton = document.querySelector('.js-end-game');
const playerTurnDisplay =  document.querySelector('.js-player-turn');
const resultDisplay = document.querySelector('.js-result');
const rc11 = document.querySelector('.js-rc11');
const rc12 = document.querySelector('.js-rc12');
const rc13 = document.querySelector('.js-rc13');
const rc21 = document.querySelector('.js-rc21');
const rc22 = document.querySelector('.js-rc22');
const rc23 = document.querySelector('.js-rc23');
const rc31 = document.querySelector('.js-rc31');
const rc32 = document.querySelector('.js-rc32');
const rc33 = document.querySelector('.js-rc33');
let startGameButtonClicked = false;



startGameButton.addEventListener('click', () => {
    restartGame();
    displayPlayerTurn();
    startGameButtonClicked = true;
});

endGameButton.addEventListener('click', () => {
    restartGame();
    closeWindow();
})


/**
 * asks you if you want to start the game
 * and when you click the button start
 * you start as x and you will have more clicks
 */


rc11.addEventListener('click', () => {
    row1Array.splice(0, 1, playerTurn);
    rc11.innerHTML = myClickHandler();
});

rc12.addEventListener('click', () => {
    row1Array.splice(1, 1, playerTurn);
    rc12.innerHTML= myClickHandler();
});
rc13.addEventListener('click', () => {
    row1Array.splice(2, 1, playerTurn);
    rc13.innerHTML= myClickHandler();
});

rc21.addEventListener('click', () => {
    row2Array.splice(0, 1, playerTurn);
    rc21.innerHTML= myClickHandler();
});
rc22.addEventListener('click', () => {
    row2Array.splice(1, 1, playerTurn);
    rc22.innerHTML= myClickHandler();
});
rc23.addEventListener('click', () => {
    row2Array.splice(2, 1, playerTurn);
    rc23.innerHTML= myClickHandler();
});

rc31.addEventListener('click', () => {
    row3Array.splice(0, 1, playerTurn);
    rc31.innerHTML= myClickHandler();
});
rc32.addEventListener('click', () => {
    
    row3Array.splice(1, 1, playerTurn);
    rc32.innerHTML= myClickHandler();
});
rc33.addEventListener('click', () => {
    row3Array.splice(2, 1, playerTurn);
    rc33.innerHTML= myClickHandler();
});

/**
 * main
 * 
 */
function myClickHandler() {
    if (!startGameButtonClicked){
        return imgPicked = '';
    }
    displayPlayerTurn();
    if (clicksCount < 10){
        clicker = playerTurn; //before the change 
        changeTurn();
        clicksCount++;
        if (clicksCount >= 5){
            if(didCurrentPlayerWin(clicker)){
                displayWinner();
                clicksCount = 9;
                endGame();
            }
        }
        if (clicksCount === 9){
            gameArray.push(row1Array);
            gameArray.push(row2Array);
            gameArray.push(row3Array);
            playerTurnDisplay.innerHTML = ''
            startGameButtonClicked = false;

            if(tie()){
                endGame();
            }
            
        }else{
            displayPlayerTurn();
        } 
    }
    return imgPicked;
}

/**
 * this function is called every click
 * during the game, it gives both players
 * their turn to play
 */
function changeTurn(){
    if (playerTurn === 'x'){
        playerTurn = 'o'
        imgPicked = xImg;
    }else if (playerTurn === 'o') {
        playerTurn ='x';
        imgPicked = oImg;
    }
}

/**
 * this shows to users who's turn is it
 * player x or player o
 */
function displayPlayerTurn(){
    playerTurnDisplay.innerHTML = `<p>it's player ${playerTurn}'s turn</p>`;
}

/**
 * this is the algorithm that starts
 * when the clickCount reaches 5
 * if in the click five there is no winner
 * it checks every click if the last clicker
 * have won.
 * it called end game when it finds a winner
 */
function didCurrentPlayerWin(clicker){
    let win = false;
    if (row1Array[0] === clicker && row1Array[1] === clicker && row1Array[2] === clicker){
        win = true;
    }else if(row2Array[0] === clicker && row2Array[1] === clicker && row2Array[2] === clicker){
        win = true;
    }else if (row3Array[0] === clicker && row3Array[1] === clicker && row3Array[2] === clicker){
        win = true;
    }else if (row1Array[0] === clicker && row2Array[0] === clicker && row3Array[0] === clicker){
        win = true;
    }else if (row1Array[1] === clicker && row2Array[1] === clicker && row3Array[1] === clicker){
        win = true;
    }else if (row1Array[2] === clicker && row2Array[2] === clicker && row3Array[2] === clicker){
        win = true;
    }else if (row1Array[0] === clicker && row2Array[1] === clicker && row3Array[2] === clicker){
        win = true;
    }
    else if (row1Array[2] === clicker && row2Array[1] === clicker && row3Array[0] === clicker){
        win = true;
    }
    return win;
}

/**
 * a game is tied when there is no winner 
 * and the clickCount is 9
 * this function needs to be called 
 * when the clicks are 9 and 
 * first we should check if there is a winner
 */
function tie(){
    let tie = false;
    if(!didCurrentPlayerWin(clicker)){
        tie = true;
        resultDisplay.innerHTML = `<p>Tie</p>`
    }
    return tie;
}

/**
 * ends the game when a player wins or it's tie
 * the end only consists of pausing the clicks
 */
function endGame(){
    rc11.removeEventListener('click', () => {
        row1Array.splice(0, 1, playerTurn);
        rc11.innerHTML = myClickHandler();
    });
    
    rc12.removeEventListener('click', () => {
        row1Array.splice(1, 1, playerTurn);
        rc12.innerHTML= myClickHandler();
    });
    rc13.removeEventListener('click', () => {
        row1Array.splice(2, 1, playerTurn);
        rc13.innerHTML= myClickHandler();
    });
    
    rc21.removeEventListener('click', () => {
        row2Array.splice(0, 1, playerTurn);
        rc21.innerHTML= myClickHandler();
    });
    rc22.removeEventListener('click', () => {
        row2Array.splice(1, 1, playerTurn);
        rc22.innerHTML= myClickHandler();
    });
    rc23.removeEventListener('click', () => {
        row2Array.splice(2, 1, playerTurn);
        rc23.innerHTML= myClickHandler();
    });
    
    rc31.removeEventListener('click', () => {
        row3Array.splice(0, 1, playerTurn);
        rc31.innerHTML= myClickHandler();
    });
    rc32.removeEventListener('click', () => {
        row3Array.splice(1, 1, playerTurn);
        rc32.innerHTML= myClickHandler();
    });
    rc33.removeEventListener('click', () => {
        row3Array.splice(2, 1, playerTurn);
        rc33.innerHTML= myClickHandler();
    });
}


/**
 * this shows to users who did win
 * it's called only when 
 * endGame() is called
 */
function displayWinner(){
    resultDisplay.innerHTML = `<p> Player ${clicker} wins</p>`
}

/**
 * the game restarts when 
 * the game has ended endGame()
 * and it's button appears only
 * when endGame() get's called
 */
function restartGame(){
    playerTurnDisplay.innerHTML = '';
    rc11.innerHTML= '';
    rc12.innerHTML= '';
    rc13.innerHTML= '';
    rc21.innerHTML= '';
    rc22.innerHTML= '';
    rc23.innerHTML= '';
    rc31.innerHTML= '';
    rc32.innerHTML= '';
    rc33.innerHTML= '';
    gameArray = [];
    row1Array = ['', '', ''];
    row2Array = ['', '', ''];
    row3Array = ['', '', ''];
    clicksCount = 0;
    playerTurn = 'x';
    imgPicked = oImg;
    startGameButtonClicked = false;
    resultDisplay.innerHTML = '';
}


function closeWindow() {
    if (confirm("Close Window?")) {
      close();
    }
  }