import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import App from './container/App';
import reportWebVitals from './reportWebVitals';
import ConfigStore from "./store/store";

const rootElement = document.getElementById("root");
const store = ConfigStore();

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
    rootElement
);

reportWebVitals();
