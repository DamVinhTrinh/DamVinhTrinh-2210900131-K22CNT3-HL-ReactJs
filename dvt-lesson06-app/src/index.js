import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import DvtApp from './DvtApp';

const dvtRoot = ReactDOM.createRoot(document.getElementById('root'));
dvtRoot.render(
  <React.StrictMode>
    <DvtApp />
  </React.StrictMode>
);
