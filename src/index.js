import React from 'react';
import { createRoot } from 'react-dom/client';
<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom';
=======
>>>>>>> development
// import { Provider } from 'react-redux';
// import { store } from "./app/store";
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Router>
      <App />
    </Router>
=======
    <App />
>>>>>>> development
  </React.StrictMode>,
);
