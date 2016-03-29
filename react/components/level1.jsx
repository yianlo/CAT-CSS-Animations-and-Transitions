var React = require('react'),
    Player = require('../../js/player'),
    Platform = require('./platform'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var Level1 = React.createClass({
  mixins: [LinkedStateMixin],

  contextTypes: {
    handleLevelComplete: React.PropTypes.func
  },

  getInitialState: function(){
    return{
      fromKeyframe: "",
      toKeyframe: "",
      animation: ""
    }
  },

  componentDidMount: function() {
    this.player= new Player(200);
    document.addEventListener("keydown", function(e){
      if(e.keyCode === 38){
        debugger
      }
    }.bind(this))

    this.refs.textBox.focus();
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

  renderInstructions: function(){
    if(this.state.fromKeyframe.replace(/\s/g, '') === "width:200px" &&
      this.state.toKeyframe.replace(/\s/g, '') ==="width:400px"){
      return this.renderSecondInstructions();
    } else {
      return this.renderFirstInstructions();
    }
  },

  renderFirstInstructions: function(){
    return(
      <div className="text-box">
        <h1 className="title">Level 1: The Bridge</h1>
        <p>
          Oh no! Mr. Cat is now stuck on platform 1 and can't get to the door.
          Can you help Mr. Cat get to the door?
          Try using CSS animations to help you!
        </p>

        <p>
          First, let's define the starting and ending frames or the <code>@keyframes</code> of our animation.
          When you specify CSS styles inside the <code>@keyframes</code> rule, the animation will
          gradually change <code>from</code> the starting style <code>to</code> the ending style.
        </p>

        <p>
          We'll start by animating the <code>width</code> property of platform 1.
          In the text editor below, go from <code>width: 200px</code> to <code>width: 400px</code>.
        </p>

        {this.renderKeyframesEditor()}
      </div>
    )
  },

  renderKeyframesEditor: function(){
    return(
      <div className="text-editor one">
        <div className="line-numbers">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8</div>
        <pre className="before">@keyframes wider-platform &#123;</pre>
        <div className="transform-container">
          <pre className="tab from">from &#123; </pre>
          <textarea ref="textBox" className="input"
            valueLink={this.linkState('fromKeyframe')}/>
          <pre className="after tab">; &#125;</pre>
        </div>

        <div className="transform-container">
          <pre className="tab to">to &#123; </pre>
          <textarea className="input"
            valueLink={this.linkState('toKeyframe')}/>
          <pre className="after tab">; &#125;</pre>
        </div>
        <pre className="after">&#125;</pre>
      </div>
    )
  },

  renderSecondInstructions: function(){
    return(
      <div className="text-box">
        <h1 className="title">Level 1: The Bridge</h1>
        <p>
          Great Job! Now that we have the animation's <code>@keyframes</code> set up,
          we can go ahead and bind it to platform 1!
        </p>

        <p>
          In the textbox below, type in <code>wider-platform</code>,
          the name of our new <code>@keyrames</code>
          and watch the platfrom animate!
        </p>
        {this.renderTextEditor()}
      </div>
    )
  },

  renderTextEditor: function(){
    return(
      <div className="text-editor two">
        <div className="line-numbers">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8</div>
        <pre className="before">@keyframes wider-platform &#123;</pre>
          <pre className="tab">from &#123; width: 200px; &#125;</pre>
          <pre className="tab">to &#123; width: 400px &#125;</pre>
        <pre className="before">&#125;</pre>

        <pre className="before" style={{paddingTop: 31}}>#Platform1&#123;</pre>
        <div className="transform-container">
          <pre className="tab">animation:</pre>
          <textarea ref="textBox" className="input"
            valueLink={this.linkState('animation')}/>
        </div>
        <pre className="after">&#125;</pre>
      </div>
    )
  },

  render: function() {
    var animateClass = ""
    if(this.state.animation === "wider-platform"){
      animateClass = " animate";
      this.player= new Player(600);
    }

    return (
      <div className="level1 display-container">
        {this.renderInstructions()}

        <div className="view-container">
          <div className="view">
            <Platform className={"platform1" + animateClass} starting={true} text="#Platform1"/>
            <Platform className="platform2" ending={true}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Level1;
