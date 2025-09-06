import React, { useState } from "react";
import DvtFuncComp from "./DvtFuncComp";
import DvtClassComp from "./DvtClassComp";
import "./App.css";

function DvtApp() {
  const [age, setAge] = useState(20);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <h1 className="app-title">🚀 Demo ReactJS Components 🚀</h1>

      <button className="darkmode-btn" onClick={toggleDarkMode}>
        {darkMode ? "☀️ Chế độ Sáng" : "🌙 Chế độ Tối"}
      </button>

      <div className="cards-wrapper">
        <DvtFuncComp
          name="Nguyễn Văn A"
          age={age}
          address="Hà Nội"
          onIncreaseAge={() => setAge(age + 1)}
        />
        <DvtClassComp
          name="Trần Thị B"
          age={22}
          address="TP. HCM"
        />
      </div>
    </div>
  );
}

export default DvtApp;
