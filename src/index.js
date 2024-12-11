import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/user" exact component={User} />
        <Route path="/profile" exact component={Profile} />
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
