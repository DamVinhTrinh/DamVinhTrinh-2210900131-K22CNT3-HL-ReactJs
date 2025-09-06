import React from 'react';
import ReactDOM from 'react-dom/client';
import DvtApp from './DvtApp';

const dvtRoot = ReactDOM.createRoot(document.getElementById('dvtRoot'));
dvtRoot.render(
  <React.StrictMode>
    <DvtApp />
  </React.StrictMode>
);
