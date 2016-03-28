var React = require('react');

var Game = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  childContextTypes: {
    checkCatAtDoor: React.PropTypes.func,
    handleLevelComplete: React.PropTypes.string
  },

  getChildContext: function() {
    return {
      checkCatAtDoor: this.checkCatAtDoor,
      handleLevelComplete: this.handleLevelComplete
    }
  },

  checkCatAtDoor: function(){
    var player = $(".player");
    var door = $(".door");

    return (
      player.position().left > door.position().left &&
      player.position().left + 50 < door.position().left + door.width() &&
      player.position().top - 14 === door.position().top
    )
  },

  handleLevelComplete: function(levelNum){
    alert('/level' + levelNum);
    this.context.router.replace('/level' + levelNum)
  },

  render: function() {
    return (
      <div className="game">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Game;
