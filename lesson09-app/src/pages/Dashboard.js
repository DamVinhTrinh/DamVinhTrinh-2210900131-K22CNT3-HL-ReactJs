import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Bảng điều khiển</h2>
      <nav>
        <Link to="profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
}
export default Dashboard;
