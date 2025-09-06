import React from "react";

function UserCard({ user }) {
  return (
    <div className="card">
      <img src={user.avatar} alt={user.name} className="avatar" />
      <h3>{user.name}</h3>
      <p><b>Tuổi:</b> {user.age}</p>
      <p><b>Quê quán:</b> {user.address}</p>
      <p><b>Sở thích:</b> {user.hobby}</p>
      <p><b>Trình độ:</b> {user.level}</p>
    </div>
  );
}

export default UserCard;
