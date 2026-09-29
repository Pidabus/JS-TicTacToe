function Player(name, token) {
    
    const getPlayerInfo = () => {
        console.log( `Player name is ${name} and Token is ${token}`);
    }
    
    return {name, token, getPlayerInfo};
}

const Gameboard = (() => {
    let board = [];

    for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            board[i][j] = 0;
        }
    }

    const getBoard = () => board;

    return {getBoard};
}) ();