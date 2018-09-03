import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Material-UI
import { createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

// Redux関連
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

// Router関連
import { BrowserRouter as Router } from 'react-router-dom';

// Redux-Thunk関連（非同期データ取得用）
import thunk from 'redux-thunk'


// Redux設定
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Chromeのデバック用
const composeEnhancers = compose; // 本番用
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk),
  )
);

// Material-UIテーマカスタマイズ
const theme = createMuiTheme({
  palette: {
    type: 'light', // light or dark
    primary: red, // primaryのカラー
    secondary: blue, // secondaryのカラー
  },
});


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme} >
      <Router>
        <App/>
      </Router>
    </MuiThemeProvider>
  </Provider>  
  , document.getElementById('root'));
registerServiceWorker();
