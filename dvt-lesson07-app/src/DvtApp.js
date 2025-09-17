import React from 'react';
import DvtFuncComp from './DvtFuncComp';
import DvtClassComp from './DvtClassComp';
import './App.css';

function DvtApp() {
  return (
    <div className="app-container">
      <h1>🚀 Dvt React Demo App</h1>
      <div className="components-container">
        <DvtFuncComp name="Nguyễn Văn A" age={20} address="Hà Nội" />
        <DvtClassComp name="Trần Thị B" age={22} address="TP.HCM" />
      </div>
    </div>
  );
}

export default DvtApp;
