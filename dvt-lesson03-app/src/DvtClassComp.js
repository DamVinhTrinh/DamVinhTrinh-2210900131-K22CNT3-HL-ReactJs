import React, { Component } from "react";
import "./App.css";

class DvtClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      degree: "Beginner",
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2000); // giả lập loading
  }

  changeDegree = () => {
    this.setState({ degree: this.state.degree === "Beginner" ? "Cử nhân CNTT" : "Beginner" });
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="card">
          <div className="spinner"></div>
          <p>Đang tải dữ liệu...</p>
        </div>
      );
    }

    return (
      <div className="card">
        <img src="https://i.pravatar.cc/150?img=5" alt="avatar" className="avatar" />
        <h3>⚡ Class Component ⚡</h3>
        <p>Xin chào, tôi là <b>{this.props.name}</b></p>
        <p><b>Tuổi:</b> {this.props.age || "Chưa có"}</p>
        <p><b>Quê quán:</b> {this.props.address}</p>
        <p><b>Trình độ:</b> {this.state.degree}</p>
        <button onClick={this.changeDegree}>Đổi trình độ 🎓</button>
      </div>
    );
  }
}

export default DvtClassComp;
