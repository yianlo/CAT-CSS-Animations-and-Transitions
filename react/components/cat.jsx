var React = require('react'),
    Player = require('../../js/player')


var Cat = React.createClass({
  getInitialState: function(){
    return {direction: "right"};
  },

  componentDidMount: function() {
    new Player();
  },

  render: function() {
    return (
      <div className="player" ref="player" style={this.props.style}></div>
    );
  }
});

module.exports = Cat;
