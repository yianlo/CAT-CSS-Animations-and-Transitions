var React = require('react'),
    Platform = require('./platform');

var Level1 = React.createClass({
  contextTypes: {
    checkCatAtDoor: React.PropTypes.func,
    handleLevelComplete: React.PropTypes.string
  },

  render: function() {
    return (
      <div className="level1 display-container">
        <div className="text-box">
          <h1 className="title">CSS Animation Transitions</h1>

          <p>Hello! Welcome to the CSS Animation & Transitions or the CAT game!</p>
          <p>To get started, try moving around Mr. Cat using the left and right arrow keys</p>
        </div>

        <div className="view-container">
          <div className="view">
            <Platform starting={true} text="Platform1"/>
            <Platform ending={true}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Level1;
