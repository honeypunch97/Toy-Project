import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyles from './components/styled/GlobalStyles.js';
import { Provider } from 'react-redux';
import { store } from './store/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <GlobalStyles />
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>,
);
