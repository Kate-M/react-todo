import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers/reducers'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './style/index.css';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    <Router >
      <Route  path="/:categoryId?" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
