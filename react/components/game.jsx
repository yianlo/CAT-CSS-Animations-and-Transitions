var React = require('react');

var Game = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  childContextTypes: {
    checkCatAtDoor: React.PropTypes.func,
    nextLevel: React.PropTypes.func
  },

  getChildContext: function() {
    return {
      checkCatAtDoor: this.checkCatAtDoor,
      nextLevel: this.nextLevel
    }
  },

  nextLevel: function(levelNum){
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
