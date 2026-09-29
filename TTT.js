function Player(name, token) { // Only manages creation of players
    
    const getPlayerInfo = () => {
        console.log( `Player name is ${name} and Token is ${token}`);
    };
    
    return {name, token, getPlayerInfo};
};

const Gameboard = (() => { // Only manages STATE of the gameboard
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
        console.log(getBoard());
    };

    return {getBoard,  addToken};
})();

player1 = Player("Affiq", "X");
Gameboard.addToken(player1, 1, 2);
