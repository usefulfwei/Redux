import thunk from 'redux-thunk' // redux-thunk 支持 dispatch function，并且可以异步调用它
import createLogger from 'redux-logger' // 利用redux-logger打印日志
import { createStore, applyMiddleware, compose } from 'redux' // 引入redux createStore、中间件及compose
import DevTools from '../containers/DevTools' // 引入DevTools调试组件

const loggerMiddleware = createLogger();

const middleware = [thunk,loggerMiddleware];

const finalCreateStore = compose(
  applyMiddleware(...middleware),
  DevTools.instrument(),
)(createStore);

export default finalCreateStore