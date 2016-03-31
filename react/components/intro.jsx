var React = require('react'),
    Player = require('../../js/player'),
    Platform = require('./platform');

var Intro = React.createClass({
  contextTypes: {
    nextLevel: React.PropTypes.func
  },

  componentDidMount: function() {
    this.player= new Player();
    document.addEventListener("keydown", this.handleLevelComplete)
  },

  componentWillUnmount: function(){
    document.removeEventListener("keydown", this.handleLevelComplete, false);
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

  handleLevelComplete: function(e){
    if(e.keyCode === 38 && this.checkCatAtDoor()){
      alert("level complete!")
      this.context.nextLevel(1)
      return false;
    }
  },

  render: function() {
    return (
      <div className="intro display-container">
        <div className="text-box">
          <h1 className="title">CSS Animations & Transitions</h1>

          <p>Welcome to the CSS Animations & Transitions or the C.A.T. game!</p>
          <p>First, try moving Mr. Cat to the door using the
            <i className="fa fa-caret-square-o-left"></i> and
            <i className="fa fa-caret-square-o-right"></i> arrow keys.

            Once you get to the door, press the
            <i className="fa fa-caret-square-o-up"></i> arrow key to complete the level!
          </p>
        </div>

        <div className="view-container">
          <div className="view">
            <Platform starting={true} ending={true}
              upArrowDisplay={{display: 'flex'}}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Intro;
