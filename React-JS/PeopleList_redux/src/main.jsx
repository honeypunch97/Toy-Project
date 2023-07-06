import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './store/index.jsx';
import GlobalStyles from './components/styled.jsx/GlobalStyles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Provider store={store}>
         <GlobalStyles />
         <App />
      </Provider>
   </React.StrictMode>,
);
