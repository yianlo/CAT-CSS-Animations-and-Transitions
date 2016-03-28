var Player = require("./player");
var Platform = require("./platform");

function Game() {
  this.$player = $(".player");
  this.$door = $(".door");
};

Game.prototype.checklevelComplete = function () {
  key("up", function(){ return this.checkCatAtDoor() }.bind(this));
};

Game.prototype.checkCatAtDoor = function () {
  alert(this.$player.position().left)
  alert(this.$player.position().top)

  alert(this.$player.door().left)
  alert(this.$player.door().top)
  // this.$player.position().left > this.$door.position.left;
};

Game.prototype.populateEls = function(){
  var player = $("<div>").attr('id', 'player');
  var platform1 = $("<div>").attr('id', 'platform1').addClass('platform');

  this.door = $("<div>").addClass('door');

  this.$view.append(player);
  this.$view.append(door);
  this.$view.append(platform1);

  this.player = new Player(player, platform1);
  this.platform1 = new Platform(platform1);
};

Game.prototype.nextLevel = function () {
  key("up", function(){
    if( this.player.position().left === this.door.position().left ){

    }
  }.bind(this));
};


module.exports = Game;
