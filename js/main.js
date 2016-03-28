var Game = require("./game");
var TextEditor = require("./text_editor");

$(function () {
  var $view = $("#view");
  var $textBox = $("#text-box");
  
  new TextEditor($textBox);
  new Game($view);
});
