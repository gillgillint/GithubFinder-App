import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GithubProvider } from './Context/github/GithubContext';
import { AlertProvider } from './Context/alert/AlertContext';

ReactDOM.render(
  <GithubProvider>
    <AlertProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </AlertProvider>
  </GithubProvider>,
  document.getElementById('root')
);
