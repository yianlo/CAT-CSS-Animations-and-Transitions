var React = require('react');

var Door = React.createClass({
  contextTypes: {
    upArrowDisplay: React.PropTypes.object
  },

  render: function() {
    return (
      <div className="door">
        <div><i className="fa fa-caret-square-o-up" style={this.props.upArrowDisplay}></i></div>
      </div>
    );
  }
});

module.exports = Door;
