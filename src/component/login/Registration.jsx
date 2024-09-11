import React, { useState } from "react";

const Registration = () => {
  const [email, setEmail] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    // Set token
    localStorage.setItem("email", email);
    window.location.href = "/dashboard";
  };
  return (
    <>
      <div className="login registration">
        <a href="/" className="backToHome">
          <i class="ri-home-4-line"></i> Back To Home
        </a>
        <div className="loginInner text-center">
          <h2 className="title">Register</h2>
          <p>Welcome! Create an account to use the system.</p>
          <form className="loginForm" onSubmit={submitHandler}>
            <input type="text" placeholder="Jhon Doe" />
            <input
              type="email"
              name=""
              id=""
              placeholder="jhon@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" name="" id="" placeholder="*******" />
            <input type="text" placeholder="Employee-0012" />
            <button className="btn-primary">Login</button>
          </form>
          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Registration;
