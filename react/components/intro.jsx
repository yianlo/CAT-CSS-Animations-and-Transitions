var React = require('react'),
    Platform = require('./platform');
    
var Intro = React.createClass({

  render: function() {
    return (
      <div className="intro display-container">
        <div className="text-box">
          <h1 className="title">CSS Animation Transitions</h1>

          <p>Welcome to the CSS Animation & Transitions or the CAT game!</p>
          <p>To get started, try moving Mr. Cat to the door using the
            <i className="fa fa-caret-square-o-left"></i> and
            <i className="fa fa-caret-square-o-right"></i> arrow keys</p>
        </div>

        <div className="view-container">
          <div className="view">
            <Platform starting={true} ending={true}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Intro;
