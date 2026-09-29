function Player(name, token) {
    
    const getPlayerInfo = () => {
        console.log( `Player name is ${name} and Token is ${token}`);
    }
    
    return {name, token, getPlayerInfo};
}