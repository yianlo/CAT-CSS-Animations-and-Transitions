var Player = require("./player");

function Game($view) {
  this.$view = $view;
  this.addPlayer();
};

Game.prototype.addPlayer = function(){
  var player = $("<div>").attr('id', 'player');

  this.$view.append(player);
  this.player = new Player(player);
};


module.exports = Game;
