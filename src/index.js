import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Switch, Redirect, Link } from './react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
import Protected from './components/Protected';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user" component={User} />
        {/* <Route path="/profile" component={Profile} /> */}
        <Protected path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        {/* <Route component={() => <div>404</div>} /> */} {/* 404页面 */}
        <Redirect to="/" /> {/* 重定向到首页 */}
      </Switch>
    </Router>
  </React.StrictMode>
);
