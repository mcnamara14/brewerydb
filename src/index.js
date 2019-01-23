import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { BrowserRouter, Route } from 'react-router-dom';
import Switch from 'react-router-dom/Switch';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './theme';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

render(
 <Provider store={store}>
   <MuiThemeProvider theme={theme}>
     <BrowserRouter>
       <Switch>
         <Route exact path='/' component={App} />
       </Switch>
     </BrowserRouter>
   </MuiThemeProvider>
 </Provider>,
 document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
