function Player(name, token) { // Only manages creation of players
    
    const getPlayerInfo = () => {
        console.log( `Player name is ${name} and Token is ${token}`);
    };
    
    return {name, token, getPlayerInfo};
};

const gameboard = (() => { // Only manages STATE of the gameboard
    let board = [];

    for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            board[i][j] = 0;
        };
    };

    const getBoard = () => board;

    const addToken = (player, slotRow, slotColumn) => {
        if(board[slotRow][slotColumn] === 0) {
            board[slotRow][slotColumn] = player.token;
        };
    };

    return {getBoard,  addToken};
})();

function gameController () { // Meant to control the flow of the game
    const board = gameboard; //board holds all the objects from gameboard
    
    const player1 = Player("player 1", "X");
    const player2 = Player("player 2", "0"); //This is a zero in string form, not an O (letter).

    let activePlayer = player1;

    const getActivePlayer = () => {
        return activePlayer;
    }

    const switchPlayer = () => {
        activePlayer = activePlayer === player1 ? player2 : player1;
    }

    const playRound = (slotRow, slotColumn) => {
        board.addToken(activePlayer, slotRow, slotColumn);
        switchPlayer();
        
        console.log(board.getBoard());
    }    

    return {board, getActivePlayer, switchPlayer, playRound};
};

const game = gameController(); // Important to store the methods from gameController.