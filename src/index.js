import React from 'react';
import ReactDOM from 'react-dom';
//For customized css
//import './index.css';

//Where we create front-end react app
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //loaded here (see index.html)
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//We're not going to use ServiceWorker here
// serviceWorker.unregister();
