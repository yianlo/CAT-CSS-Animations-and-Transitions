function Player() {
  
  this.$player = $(".player");
  this.direction = "right"

  this.resting();
  this.bindMoveKeys();
}

Player.prototype.bindMoveKeys = function () {
  var player = this;

  key("left", this.moveLeft.bind(this));
  key("right", this.moveRight.bind(this));


  $(document).keydown(function(e){
    this.walk();
  }.bind(this));

  $(document).keyup(function(e){
    this.resting();
  }.bind(this));
};

Player.prototype.resting = function () {
  this.$player.css('background-image', 'url(./stylesheet/images/idle.png)');

  this.$player.animateSprite({
    fps: 6,
    loop: true,
    animations: {
        walk: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    },
  })
};

Player.prototype.walk = function () {
  this.$player.css('background-image', 'url(./stylesheet/images/walk.png)');

  this.$player.animateSprite({
    fps: 20,
    loop: true,
    animations: {
        walk: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
  })
};

Player.prototype.moveLeft = function () {
  if(this.direction === "right"){
    this.$player.addClass("left");
    this.direction = "left"
  }

  if ( this.$player.position().left > 5){
    this.$player.animate( {left: this.$player.position().left - 10}, 0.5, "linear");
  }

  return false
};

Player.prototype.moveRight = function () {
  var pos = this.$player.position();

  if(this.direction === "left"){
    this.$player.removeClass("left");
    this.direction = "right"
  }

  if (this.$player.position().left <= (this.$player.parent().width() - this.$player.width() / 2)){
    this.$player.animate( {left: pos.left + 10}, 0.5, "linear" );
  }

  return false
};

Player.prototype.fall = function () {
  this.$player.animate(
    {marginTop: (this.$player.parent().height() - this.$player.height() - this.$player.position().top) + 'px'},
    700
  )
};

module.exports = Player;
