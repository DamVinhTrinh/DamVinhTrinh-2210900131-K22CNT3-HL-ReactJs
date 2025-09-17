import React, { Component } from 'react';

class DvtClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hobby: 'Lập trình ReactJS'
    };
  }

  render() {
    const { name, age, address } = this.props;
    return (
      <div className="card">
        <h3>🌟 Class Component 🌟</h3>
        <p><b>Họ tên:</b> {name}</p>
        <p><b>Tuổi:</b> {age}</p>
        <p><b>Địa chỉ:</b> {address}</p>
        <p><b>Sở thích:</b> {this.state.hobby}</p>
      </div>
    );
  }
}

export default DvtClassComp;
