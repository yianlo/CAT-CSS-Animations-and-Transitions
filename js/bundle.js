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


/***/ },
/* 3 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map