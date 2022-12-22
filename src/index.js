import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from './store';
import './index.css';
import App from './App';
import { UserStorage } from './Context/UserStorage';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <UserStorage>
        <BrowserRouter>
         <App />
        </BrowserRouter>
      </UserStorage>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);