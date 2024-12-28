function createBrowserHistory(props) {
  const globalHistory = window.history
  let state
  let listeners = []
  let message
  let confirm = props.getUserConfirmation ? props.getUserConfirmation : window.confirm

  /**
   * 添加一个路由条目，并移动指针
   * @param {*} pathname 路径名
   * @param {*} nextState 新状态
   */
  // path('/user', {id: 1, name: 'qxx'})
  // path({pathname: '/user', state: {id: 1, name: 'qxx'}})
  function push(pathname, nextState) {
    const action = 'PUSH'

    // 处理参数
    if(typeof pathname === 'object') {
      state = pathname.state
      pathname = pathname.pathname
    } else {
      state = nextState
    }

    // 调用原生pushState 跳转路径
    globalHistory.pushState(state, null, pathname)

    const location = {pathname, state}
    if(message) {
      let showMessage = message({ pathname })
      let allow = confirm(showMessage)

      if(!allow) return
    }
    notify({ action, location })
  }

  function notify(newHistory) {
    // history.location = location
    // history.action = action
    Object.assign(history, newHistory)
    
    listeners.forEach(listener => {
      listener(history.location)
    })
  }

  function listen (listener) {
    listeners.push(listener)

    // 通常情况下，监听方法都会返回一个函数，用于取消此监听方法
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  // push 时需要手动触发notify，go时监听popState即可
  window.addEventListener('popstate', () => {
    const location = {
      pathname: window.location.pathname,
      state: window.location.state
    }
    notify({ action: 'POP', location })
  })

  function go(n) {
    globalHistory.go(n)
  }
  function goBack() {
    go(-1)
  }

  function goForward() {
    go(1)
  }

  function block(messageFn) {
    message = messageFn
    return () => {
      message = null
    }
  }

  const history = {
    action: 'POP', //'PUSH' / 'POP' /'REPLACE'
    push,
    listen,
    location: { 
      pathname: window.location.pathname,
      state: window.location.state
    },
    go,
    goBack,
    goForward,
    block
  }
  
  return history
}

export default createBrowserHistory