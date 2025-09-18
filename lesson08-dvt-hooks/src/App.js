import React, { useState, useEffect } from "react";
import Clock from "./components/Clock";


function App() {
  // ví dụ useState
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // ví dụ useEffect
  useEffect(() => {
    document.title = `Bạn đã bấm ${count} lần`;
  }, [count]); // chạy lại khi count thay đổi

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Hooks Demo - Lesson 08</h1>

      <h2>useState Example</h2>
      <p>Bạn đã bấm nút {count} lần</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        Bấm tôi
      </button>

      <h2>useState với Form</h2>
      <input
        type="text"
        placeholder="Nhập nội dung..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "5px", fontSize: "16px" }}
      />
      <p>Bạn đang gõ: {text}</p>

      <h2>useEffect Example</h2>
      <p>(Mở tab title trên trình duyệt sẽ thấy số lần bấm nút thay đổi)</p>
    </div>
  );
}

export default App;
