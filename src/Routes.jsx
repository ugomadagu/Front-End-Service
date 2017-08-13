var React = require('react')
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var SignUpPage = require('./components/SignUp-Page');

module.exports = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="signup" component={SignUpPage}></Route>
    </Route>
  </Router>
);
