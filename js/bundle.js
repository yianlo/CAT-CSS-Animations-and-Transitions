/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Game = __webpack_require__(2);
	
	$(function () {
	  var $view = $("#view");
	  new Game($view);
	});


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Player = __webpack_require__(3);
	var Platform = __webpack_require__(4);
	
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


/***/ },
/* 3 */
/***/ function(module, exports) {

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


/***/ },
/* 4 */
/***/ function(module, exports) {

	function Platform($platform) {
	  this.$platform = $platform;
	}
	
	module.exports = Platform;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map