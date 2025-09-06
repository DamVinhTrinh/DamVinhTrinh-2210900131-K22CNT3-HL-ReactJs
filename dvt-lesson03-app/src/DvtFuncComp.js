import React, { useEffect, useState } from "react";
import "./App.css";

function DvtFuncComp({ name, age, address, onIncreaseAge }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // giả lập loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="card">
        <div className="spinner"></div>
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }

  return (
    <div className="card">
      <img src="https://i.pravatar.cc/150?img=3" alt="avatar" className="avatar" />
      <h3>✨ Function Component ✨</h3>
      <p>Xin chào, tôi là <b>{name}</b></p>
      <p><b>Tuổi:</b> {age}</p>
      <p><b>Quê quán:</b> {address}</p>
      <button onClick={onIncreaseAge}>Tăng tuổi 🎉</button>
    </div>
  );
}

export default DvtFuncComp;
