var React = require('react'),
    Cat = require('./cat'),
    Door = require('./door');

var Platform = React.createClass({
  renderCat: function(){
    if( this.props.starting ){ return <Cat/> }
  },

  renderDoor: function(){
    if( this.props.ending ){ return <Door/> }
  },

  render: function() {
    return (
      <div className="platform">
        <p>{this.props.text}</p>
        { this.renderCat() }
        { this.renderDoor() }
      </div>
    );
  }
});

module.exports = Platform;
