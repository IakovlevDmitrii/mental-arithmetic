import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
   <BrowserRouter>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </BrowserRouter>
);
