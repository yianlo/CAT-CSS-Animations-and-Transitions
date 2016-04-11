function Player(width = null, switchPlatform = false) {
  this.$player = $(".player");
  this.direction = "right"
  this.width = width || this.$player.parent().width();
  this.switchPlatform = switchPlatform;

  this.rest();
  this.bindMoveKeys();
}

Player.prototype.bindMoveKeys = function () {
  var player = this;

  document.addEventListener("keydown", function(e){
    if ($(e.target).is('input, textarea')) { return; }

    if(e.keyCode === 37){
      player.moveLeft();

      if (player.firstStep){
        player.turnLeft();
        player.startWalking();
      }
      e.preventDefault();
    } else if (e.keyCode === 39){
      player.moveRight();

      if (player.firstStep){
        player.turnRight();
        player.startWalking();
      }
      e.preventDefault();
    }
  }.bind(this));

  document.addEventListener("keyup", function(e){
    if ($(e.target).is('input, textarea')) { return; }

    if(e.keyCode === 37 || e.keyCode === 39){
      player.rest();
      e.preventDefault();
    }
  });
};

Player.prototype.startWalking = function () {
  this.walk();
  this.changeToWalk();
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
  var $player = this.$player;
  if (this.switchPlatform){ this.switchLeftPlatforms() }

  if ( $player.position().left > -28 ){
    $player.animate( {left: $player.position().left - 15}, 0.005, "linear");
  }
};

Player.prototype.moveRight = function () {
  var $player = this.$player;

  if (this.switchPlatform){ this.switchRightPlatforms() }

  if ($player.position().left <= (this.width - $player.width() / 2 + 19)){
    $player.animate( {left: $player.position().left + 16}, 0.005, "linear" );
  }
};

Player.prototype.switchLeftPlatforms = function () {
  var $elevator = $(".platform-elevator");
  var $platform1 = $(".platform1");

  if ($elevator.length > 0 && this.$player.parents('div.platform2').length > 0){
    if (this.$player.position().left < -24){
      var top = $elevator.position().top;
      if( top > 197 && top < 210){
        this.$player.css("left", 165);
        this.$player.detach();
        $elevator.append(this.$player);
      }
    }
  } else if ($platform1.length > 0 && this.$player.parents('div.platform-elevator').length > 0){
    if (this.$player.position().left < -24){
      var top = $elevator.position().top;
      if( top > 400 && top < 413){
        this.$player.css("left", 165);
        this.$player.detach();
        $platform1.append(this.$player);
      }
    }
  }
};

Player.prototype.switchRightPlatforms = function () {
  var $elevator = $(".platform-elevator");
  var $platform2 = $(".platform2");

  if ($elevator.length > 0 && this.$player.parents('div.platform1').length > 0){
    if (this.$player.position().left > 150){
      var top = $elevator.position().top;
      if( top > 400 && top < 410){
        this.$player.css("left", -25);
        this.$player.detach();
        $elevator.append(this.$player);
      }
    }
  } else if ($platform2.length > 0 && this.$player.parents('div.platform-elevator').length > 0){
    if (this.$player.position().left > 150){
      var top = $elevator.position().top;
      if( top > 200 && top < 210){
        this.$player.css("left", -25);
        this.$player.detach();
        $platform2.append(this.$player);
      }
    }
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
