import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuth(true);
    navigate("/dashboard"); // điều hướng sau khi login
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
export default Login;
