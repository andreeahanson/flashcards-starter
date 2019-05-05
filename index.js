const http = require('http');
let app = http.createServer();
const Game = require('./src/Game');

// Start the server on port 3000
app.listen(3000, '127.0.0.1');  
console.log('Node server running on port 3000'); 

restartGame();

function restartGame() {
  let game = new Game();
  game.start();
}

module.exports.restartGame = restartGame;