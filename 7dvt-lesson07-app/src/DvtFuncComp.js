import React from 'react';

function DvtFuncComp({ name, age, address }) {
  return (
    <div className="card">
      <h3>✨ Function Component ✨</h3>
      <p><b>Họ tên:</b> {name}</p>
      <p><b>Tuổi:</b> {age}</p>
      <p><b>Địa chỉ:</b> {address}</p>
    </div>
  );
}

export default DvtFuncComp;
