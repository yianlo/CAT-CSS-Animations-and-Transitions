var React = require('react');

var Cat = React.createClass({
  getInitialState: function(){
    return {direction: "right"};
  },

  render: function() {
    return (
      <div className="player" ref="player" style={this.props.style}></div>
    );
  }
});

module.exports = Cat;
