const createHashHistory = (props) => {
  const historyStack = [] // 手动维护一个历史栈
  let current = -1 // 当前栈顶的指针
  let action = 'POP'
  let state
  let listeners = [] // 监听函数
  let message
  let confirm = props.getUserConfirmation ? props.getUserConfirmation : window.confirm

  function listen(listener) {
    listeners.push(listener)

    // 返回一个取消监听的函数
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  // 2. 在这里会因为location的hash发生变化而触发
  function hashChangeHandler(event) {
    // 去掉hash前面的#, 剩下的就是路径
    const pathname = window.location.hash.slice(1)

    const location = { pathname, state }
    Object.assign(history, {
      action,
      location
    })

    if(action === 'PUSH') {
      historyStack[++current] = location
    }

    // 发送通知
    listeners.forEach(listener => {
      listener(history.location)
    })
  }

  window.addEventListener('hashchange', hashChangeHandler)

  function push(pathname, nextState) {
    action = 'PUSH'
    if(typeof pathname === 'object') {
      state = pathname.state
      pathname = pathname.pathname
    } else {
      state = nextState
    }

    if(message) {
      let showMessage = message({ pathname })
      let allow = confirm(showMessage)

      if(!allow) return
    }

    // 1. 在这里改变location的hash
    window.location.hash = pathname

  }

  function go(n) {
    action = 'POP'
    current+=n
    let nextLocation = historyStack[current]

    state = nextLocation.state
    // 1.在这里改变location的hash
    window.location.hash = nextLocation.pathname
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
    action: 'POP', // 'POP' /'PUSH' /'REPLACE'
    go,
    goBack,
    goForward,
    push,
    listen,
    location: { pathname: '/', state: undefined },
    block
  }
  // 处理初始值hash为空的情况
  if(window.location.hash) {
    action = 'PUSH'
    hashChangeHandler()
  } else {
    window.location.hash = '/' // 默认跳转到首页
  }


  return history
}

export default createHashHistory