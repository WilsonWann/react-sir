import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { getTodos, todosUrlEndpoint as cacheKey } from './api/todosApi'
import { preload } from 'swr'

preload(cacheKey, getTodos)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
