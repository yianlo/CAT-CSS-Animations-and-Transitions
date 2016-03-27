function Player($player) {
  this.$player = $player;
  this.pos = 0;
  this.bindMoveKeys();

  if (this.$player.position().left > 50){
    this.fall();
  }
}

Player.prototype.bindMoveKeys = function () {
  key("left", function(){
    this.$player.animate( {left: this.$player.position().left - 10}, 70, "linear" );
  }.bind(this));

  key("right", function(){
    var pos = this.$player.position();

    if(pos.left >= 100){
      this.fall()
    } else {
      this.$player.animate( {left: pos.left + 10}, 70, "linear" );
    }
  }.bind(this));
  //
  // key("up", function(){
  //   this.$player.animate( {top: this.$player.position().top - 10}, 70, "linear" );
  // }.bind(this));
  //
  // key("down", function(){
  //   this.$player.animate( {top: this.$player.position().top + 10}, 70, "linear" );
  // }.bind(this));
};

Player.prototype.fall = function () {
  charIsFalling = true;

  this.$player.animate(
    {marginTop : (this.$player.parent().height() - this.$player.height() - this.$player.position().top + 5) + 'px'},
    700
  )
};


window.Player = Player;
module.exports = Player;
