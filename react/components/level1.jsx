var React = require('react'),
    Player = require('../../js/player'),
    Platform = require('./platform');

var Level1 = React.createClass({
  contextTypes: {
    handleLevelComplete: React.PropTypes.func
  },

  componentDidMount: function() {
    this.player= new Player();
    document.addEventListener("keydown", function(e){
      if(e.keyCode === 38){
        debugger
      }
    }.bind(this))
  },

  checkCatAtDoor: function(){
    var playerDiv = $(".player");
    var doorDiv = $(".door");

    return (
      playerDiv.position().left > doorDiv.position().left &&
      playerDiv.position().left + 50 < doorDiv.position().left + doorDiv.width() &&
      playerDiv.position().top - 14 < doorDiv.position().top
    )
  },

  renderTextEditor: function(){
    return(
      <div className="text-editor">
        <div className="line-numbers">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8</div>
        <pre className="before">#platform1&#123;</pre>
        <textarea className="code"></textarea>
        <pre className="after">&#125;</pre>
      </div>
    )
  },

  render: function() {
    return (
      <div className="level1 display-container">
        <div className="text-box">
          <h1 className="title">Level 1: The Bridge</h1>

          <p>Oh no! Mr. Cat is now stuck on platform 1 and can't get to the door. Can you help Mr. Cat get to the door?</p>

          {this.renderTextEditor()}
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
