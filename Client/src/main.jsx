import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import style from './index.css'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <BrowserRouter>
      <div className={style.app}>
        <App />
      </div>
    </BrowserRouter>
  </Provider>
);
