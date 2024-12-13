import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from './react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/user" component={User} />
        <Route path="/profile" component={Profile} />
      </Router>
    </div>
  </React.StrictMode>
);
