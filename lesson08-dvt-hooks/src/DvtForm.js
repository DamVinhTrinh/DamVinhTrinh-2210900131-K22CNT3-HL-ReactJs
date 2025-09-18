import React, { useState } from "react";

function DvtForm() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Xin chào ${name}, bạn đến từ ${city}!`);
  };

  return (
    <div style={{ marginTop: "30px", textAlign: "center" }}>
      <h2>Form thông tin</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Nhập tên..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />
        <input 
          type="text"
          placeholder="Nhập quê quán..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br /><br />
        <button type="submit">Gửi</button>
      </form>
    </div>
  );
}

export default DvtForm;
