// REACT
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var Game = require('./components/game');
var Intro = require('./components/intro');
var Level1 = require('./components/level1');
var Level2 = require('./components/level2');

var routes = (
  <Route path="/" component={Game}>
    <IndexRoute component={Intro} />
    <Route path="level1" component={Level1}></Route>
    <Route path="level2" component={Level2}></Route>
  </Route>
  );

$(function(){
  ReactDOM.render(
    <Router history={hashHistory}>
      {routes}
    </Router>,
    document.getElementById('root')
  );
});
