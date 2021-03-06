var React = require('react'),
    Player = require('../../js/player'),
    Platform = require('./platform'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var Level2 = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return{
      fromKeyframe: "",
      toKeyframe: "",
      animation: ""
    }
  },

  componentDidMount: function() {
    this.player= new Player(200);
    document.addEventListener("keydown", this.handleLevelComplete);

    this.refs.textBox.focus();
  },

  componentWillUnmount: function(){
    document.removeEventListener("keydown", this.handleLevelComplete, false);
  },

  hideGameViewModal: function(){
    this.refs.viewModal.style.display = "none";
    this.refs.textBoxModal.style.display = "block";
    this.refs.gameView.focus();
  },

  showGameViewModal: function(){
    this.refs.viewModal.style.display = "block";
    this.refs.textBoxModal.style.display = "none";
    this.refs.textBox.focus();
  },

  handleLevelComplete: function(e){
    if(e.keyCode === 38){
      this.checkCatAtDoor()
    }
  },

  checkCatAtDoor: function(){
    var playerDiv = $(".player");

    if(this.state.animation.replace(/\s/g, '') === "animation-duration:5s"){
      if(playerDiv.parents('div.platform2').length > 0){
        if(playerDiv.position().left > 30.5 && playerDiv.position().left < 102){
          alert("You won the game! Thank you for playing!\n\nMore levels to come. Checkout the GitHub page for more.")
          location.href = "https://github.com/yianlo/CAT-CSS-Animations-and-Transitions"
          return false;
        }
      }
    }
  },

  renderInstructions: function(){
    return(
      <div className="text-box">
        <div className="modal" ref="textBoxModal" onClick={this.showGameViewModal}>
        </div>

        <h1 className="title">Level 2: The Elevator</h1>
        <p>
          Great job getting Mr. Cat this far. This time to get to the door, Mr. Cat
          needs to take an elevator, but this elevator here is <code>moving</code> way too fast!
          Can you help Mr. Cat slow down this <code>moving</code> elevator?
        </p>

        <p>Since <code>moving</code> is a CSS animation added to the elevator (see below),
          specifying the <code>animation-duration</code> should help you do the trick!
        </p>

        <p>
          In the text editor below, type in <code>animation-duration: 5s</code>.
          The duration will always be a number with a time unit. The unit can either be
          <code>s</code> for seconds or <code>ms</code> for milliseconds.
          If you don&#39;t specify a unit, the duration property will not work!
        </p>

        {this.renderTextEditor()}
      </div>
    )
  },

  renderTextEditor: function(){
    return(
      <div className="text-editor" style={{height: 235}}>
        <div className="line-numbers">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9</div>
        <pre className="before">@keyframes moving &#123;</pre>
          <pre className="tab">from &#123; bottom: 0; &#125;</pre>
          <pre className="tab">to &#123; bottom: 300px; &#125;</pre>
        <pre className="before">&#125;</pre>

        <pre className="before" style={{paddingTop: 31}}>#Elevator&#123;</pre>
          <pre className="tab">animation-name: moving;</pre>
          <div className="transform-container tab">
            <textarea className="input" ref="textBox"
              valueLink={this.linkState('animation')}/>
          </div>
        <pre className="after">&#125;</pre>
      </div>
    )
  },

  render: function() {
    var animateClass = "";
    var upArrowDisplay = {};
    if(this.state.animation.replace(/\s/g, '') === "animation-duration:5s"){
      animateClass = " slow";
      this.player= new Player(200, true);
      upArrowDisplay = {display: 'flex'};
      $(".input").blur();
      this.hideGameViewModal();
    }

    return (
      <div className="level2 display-container">
        {this.renderInstructions()}

        <div className="view-container" ref="gameView" onClick={this.hideGameViewModal}>
          <div className="view">
            <Platform className={"platform1"} starting={true}/>
            <Platform className={"platform-elevator" + animateClass} text="#Elevator"/>
            <Platform className="platform2" ending={true} upArrowDisplay={upArrowDisplay}/>
          </div>

          <div className="modal" ref="viewModal">
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Level2;
