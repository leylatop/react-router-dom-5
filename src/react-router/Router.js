import React from 'react';
import RouterContext from './RouterContext';

class Router extends React.Component {
  static computeRootMatch(pathname) {
    return {
      path:'/', url: '/',params: {}, isExact: pathname === '/'
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      location: props.history.location,
    };
  }

  componentDidMount() {
    // 监听到路由发生变化后，执行回调,否则手动更改路由不会更新界面。
    // listen方法是history仓库实现的
    this.unlisten = this.props.history.listen((location) => {
      this.setState({ location })
    })
  }

  componentWillUnmount() {
    this.unlisten && this.unlisten()
  }

  render() {
    // location 也是history中的属性
    const value = {
      location: this.state.location,
      history: this.props.history,
      match: Router.computeRootMatch(this.state.location.pathname) // 与route保持统一
    }
    return <RouterContext.Provider value={value}>
      {this.props.children}
    </RouterContext.Provider>
  }
}

export default Router;