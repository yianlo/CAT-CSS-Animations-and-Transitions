function Player($player, $platform) {
  this.$player = $player;
  this.$platform = $platform

  this.bindMoveKeys();
}

Player.prototype.bindMoveKeys = function () {
  key("left", function(){
    this.$player.animate( {left: this.$player.position().left - 10}, 70, "linear" );
  }.bind(this));

  key("right", function(){
    var pos = this.$player.position();

    if(pos.left >= this.$platform.width() - 15){
      this.$player.animate.bind( {left: pos.left + 10}, 70, "linear" );
      setTimeout(this.fall.bind(this), 20)
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
    {marginTop : (this.$player.parent().height() - this.$player.height() - this.$player.position().top) + 'px'},
    700
  )
};

window.Player = Player;
module.exports = Player;
