import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Switch, Redirect, Link, NavLink,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from './react-router-dom';
// import Home from './components/Home';
// import User from './components/User';
// import Profile from './components/Profile';
// import Protected from './components/Protected';
// import Login from './components/Login';
// import NavHeader from './components/NavHeader';

const root = ReactDOM.createRoot(document.getElementById('root'));
const navLinkClassName='normal'
const navLinkStyle={
  color: 'green'
}
const navLinkActiveClassName = 'strong'
const navLinkActiveStyle = {
  color: 'red'
}



// root.render(
//   <React.StrictMode>
//     <Router>
//       <NavHeader title="导航"/>
//       <ul>
//         <li><NavLink className={navLinkClassName} style={navLinkStyle} activeClassName={navLinkActiveClassName} activeStyle={navLinkActiveStyle} to="/" exact>Home</NavLink></li>
//         <li><NavLink className={navLinkClassName} style={navLinkStyle} activeClassName={navLinkActiveClassName} activeStyle={navLinkActiveStyle} to="/user">User</NavLink></li>
//         <li><NavLink className={navLinkClassName} style={navLinkStyle} activeClassName={navLinkActiveClassName} activeStyle={navLinkActiveStyle} to="/profile">Profile</NavLink></li>
//       </ul>
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/user" component={User} />
//         {/* <Route path="/profile" component={Profile} /> */}
//         <Protected path="/profile" component={Profile} />
//         <Route path="/login" component={Login} />
//         {/* <Route component={() => <div>404</div>} /> */} {/* 404页面 */}
//         <Redirect to="/" /> {/* 重定向到首页 */}
//       </Switch>
//     </Router>
//   </React.StrictMode>
// );

function Home() {
  return <div>首页</div>
}

function UserDetail(props) {
  const history = useHistory()
  console.log('history', history);
  const location = useLocation()
  console.log('location', location)

  const params = useParams()
  console.log('params', params)

  const routeMatch = useRouteMatch({path: '/user/detail/:id', strict: true, sensitive: true })
  console.log('routeMatch', routeMatch)

  return <div>UserDetail</div>
  
}

root.render(
  <React.StrictMode>
    <Router>
      <ul>
        <li><Link to='/' exact>首页</Link></li>
        <li><Link to={{ pathname: '/user/detail/100', state: { id: 100, name: 'qxx' } }}>个人详情页</Link></li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user/detail/:id" component={UserDetail} />
      </Switch>
    </Router>
  </React.StrictMode>
);

