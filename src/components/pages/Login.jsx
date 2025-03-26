import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("https://nt-devconnector.onrender.com/api/auth", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      });
  }

  return (
    <div className="w-[800px] mx-auto mt-[50px]">
      <div>
        <h2 className="text-[48px] font-[700] text-blue-500">Sign IN</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>
            <input
              className="w-full p-[12px] mx-[0] my-[10px] border-[2px] border-[#ccc] rounded-[8px] text-[16px] [transition:all_0.3s_ease-in-out]"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <input
              className="w-full p-[10px] mx-[0] my-[8px] border-[2px] border-[#ccc] rounded-[5px] text-[16px] [transition:0.3s]"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="w-[120px] h-[40px] bg-blue-500 font-[400] text-white text-[16px] mt-[20px] flex items-center justify-center">
            Login
          </button>
          <Link className="text-[16px] text-blue-500 mt-[30px]" to="/register">
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
