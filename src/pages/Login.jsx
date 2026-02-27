import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setCurrentUser, users }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) =>
        u.username === form.username.trim().toLowerCase() &&
        u.password === form.password
    );

    if (!user) {
      setError("Invalid username or password");
      return;
    }

    setCurrentUser(user);

    if (user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button className="btn-primary">Login</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p>Users: Bret / 1234</p>
      <p>Admin: admin / admin123</p>
      </div>
    </div>
  );
}

export default Login;
