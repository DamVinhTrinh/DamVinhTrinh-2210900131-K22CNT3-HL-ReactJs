import React, { useState } from 'react';

function DvtForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    hometown: ''
  });

  const [error, setError] = useState('');
  const [submissions, setSubmissions] = useState([]); // Danh sách lưu thông tin đã nhập

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.hometown) {
      setError('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    if (isNaN(formData.age) || Number(formData.age) <= 0) {
      setError('Tuổi phải là số hợp lệ > 0!');
      return;
    }

    setError('');
    setSubmissions([...submissions, formData]); // Lưu vào danh sách
    setFormData({ name: '', age: '', hometown: '' }); // Reset form
  };

  return (
    <div className="form-container">
      <h2>Thông tin cá nhân</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nhập họ tên"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Nhập tuổi"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="hometown"
          placeholder="Nhập quê quán"
          value={formData.hometown}
          onChange={handleChange}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Gửi</button>
      </form>

      {/* Hiển thị danh sách */}
      {submissions.length > 0 && (
        <div className="list-container">
          <h3>Danh sách đã nhập:</h3>
          <ul>
            {submissions.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> - {item.age} tuổi, quê ở {item.hometown}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DvtForm;
