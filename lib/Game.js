const inquirer = ('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');


function Game() {
    this.roundNumber =0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;

}

// Function to initialize game
Game.prototype.initializeGame = function() {
    //Enemies for the Enemies Array
    this.enemies.push(new Enemy('goblin', 'sword'));
this.enemies.push(new Enemy('orc', 'baseball bat'));
this.enemies.push(new Enemy('skeleton', 'axe'));

this.currentEnemy = this.enemies[0];

//Prompt user for name to become the Player
inquirer
  .prompt({
    type: 'text',
    name: 'name',
    messsage: 'What is your name?'
})

//destructure name from the prompt object
.then(({ name }) => {
    this.player = new Player(name);

    //Function call to start new battle
    this.startNewBattle()
})

};

module.exports = Game;