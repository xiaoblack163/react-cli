import { createStore, applyMiddleware, compose } from 'redux'
import middleware from './middleware'
import reducer from './reducer.home'


const finalCreateStore = compose(
    applyMiddleware.apply(this, middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

export const store = function(initialState) {
    const  trey = createStore(reducer, initialState, finalCreateStore)
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducer.home', () => {
            const nextRootReducer = require('./reducer.home')
            trey.replaceReducer(nextRootReducer)
        })
  }
   return trey
}()
