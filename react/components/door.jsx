var React = require('react');

var Door = React.createClass({
  contextTypes: {
    checkCatAtDoor: React.PropTypes.func,
    handleLevelComplete: React.PropTypes.string
  },

  getInitialState: function(){
    return {upArrowDisplay: {display: 'none'}}
  },

  componentDidMount: function(){
    document.addEventListener("keydown", function(e){
      if(e.keyCode === 38 && this.context.checkCatAtDoor()){
        this.context.handleLevelComplete(1)
      } else if ( (e.keyCode === 37 || e.keyCode === 39) && this.context.checkCatAtDoor() ){
        this.setState( {upArrowDisplay: {display: 'flex'}});
      }
      false
    }.bind(this));
  },

  render: function() {
    return (
      <div className="door">
        <div style={this.state.upArrowDisplay}><i className="fa fa-caret-square-o-up"></i></div>
      </div>
    );
  }
});

module.exports = Door;
