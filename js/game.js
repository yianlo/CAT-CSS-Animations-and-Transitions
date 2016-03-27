var Player = require("./player");
var Platform = require("./platform");

function Game($view) {
  this.$view = $view;
  this.populateEls();
};

Game.prototype.populateEls = function(){
  var player = $("<div>").attr('id', 'player');
  var platform1 = $("<div>").attr('id', 'platform1').addClass('platform');

  this.$view.append(player);
  this.$view.append(platform1);

  this.player = new Player(player, platform1);
  this.platform1 = new Platform(platform1);
};


module.exports = Game;
