var React = require('react'),
    Cat = require('./cat'),
    Door = require('./door');

var Platform = React.createClass({
  renderCat: function(){
    if( this.props.starting ){ return <Cat/> }
  },

  renderDoor: function(){
    if( this.props.ending ){ return <Door upArrowDisplay={this.props.upArrowDisplay}/> }
  },

  renderText: function(){
    if( this.props.text ){ return <p>{this.props.text}</p> }
  },

  render: function() {
    return (
      <div className={"platform " + this.props.className}>
        { this.renderText() }
        { this.renderCat() }
        { this.renderDoor() }
      </div>
    );
  }
});

module.exports = Platform;
