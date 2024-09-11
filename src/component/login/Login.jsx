import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    // Set token
    localStorage.setItem("email", email);
    window.location.href = "/dashboard";
  };
  return (
    <>
      <div className="login">
        <a href="/" className="backToHome">
          <i class="ri-home-4-line"></i> Back To Home
        </a>
        <div className="loginInner text-center">
          <h2 className="title">Login</h2>
          <p>Welcome back! Login to access the system.</p>
          <form className="loginForm" onSubmit={submitHandler}>
            <input
              type="email"
              placeholder="jhon@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" name="" id="" placeholder="*******" />
            <button className="btn-primary">Login</button>
          </form>
          <p>
            Don't have an account? <a href="/registration">Create an account</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
