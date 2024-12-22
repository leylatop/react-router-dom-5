import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Switch, Redirect } from './react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user" component={User} />
        <Route path="/profile" component={Profile} />
        {/* <Route component={() => <div>404</div>} /> */} {/* 404页面 */}
        <Redirect to="/" /> {/* 重定向到首页 */}
      </Switch>
    </Router>
  </React.StrictMode>
);
