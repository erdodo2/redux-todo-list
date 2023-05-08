import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//Redux kütüphanesini projemize dahil ediyoruz.
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducers} from "./reducers";
const store = createStore(reducers);
//----------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
//Provider ile projemizi sarmalıyoruz.
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

