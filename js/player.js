function Player() {
  this.$player = $(".player");
  this.direction = "right"

  this.rest();
  this.bindMoveKeys();
}

Player.prototype.bindMoveKeys = function () {
  var player = this;

  $(document).keydown(function(e){
    if(e.keyCode === 37){
      if (player.firstStep){
        player.turnLeft();
        player.startWalking();
      }

      player.moveLeft();
      return false;
    } else if (e.keyCode === 39){
      if (player.firstStep){
        player.turnRight();
        player.startWalking();
      }

      player.moveRight();
      return false;
    }
  });

  $(document).keyup(function(e){
    if(e.keyCode === 37 || e.keyCode === 39){
      player.rest();
    }
  });
};

Player.prototype.startWalking = function () {
  this.changeToWalk();
  this.walk();
  this.firstStep = false;
};

Player.prototype.rest = function () {
  this.$player.css('background-image', 'url(./stylesheet/images/idle.png)');

  this.$player.animateSprite({
    fps: 6,
    loop: true,
    animations: {
        rest: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    },
  })

  this.firstStep = true;
};

Player.prototype.changeToWalk = function () {
  this.$player.css('background-image', 'url(./stylesheet/images/walk.png)');
};

Player.prototype.walk = function () {
  this.$player.animateSprite({
    fps: 25,
    loop: true,
    animations: {
        walk: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
  })
};

Player.prototype.moveLeft = function () {
  var pos = this.$player.position();

  if ( pos.left > 5){
    this.$player.animate( {left: pos.left - 10}, 0.005, "linear");
  }
};

Player.prototype.moveRight = function () {
  var pos = this.$player.position();

  if (this.$player.position().left <= (this.$player.parent().width() - this.$player.width() / 2)){
    this.$player.animate( {left: pos.left + 10}, 0.005, "linear" );
  }
};

Player.prototype.turnLeft = function () {
  if(this.direction === "right"){
    this.$player.addClass("left");
    this.direction = "left";
  }
};

Player.prototype.turnRight = function () {
  if(this.direction === "left"){
    this.$player.removeClass("left");
    this.direction = "right"
  }
};

Player.prototype.fall = function () {
  this.$player.animate(
    {marginTop: (this.$player.parent().height() - this.$player.height() - this.$player.position().top) + 'px'},
    700
  )
};

module.exports = Player;
