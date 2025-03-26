import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("https://nt-devconnector.onrender.com/api/users", { name, email, password })
      .then((res) => localStorage.setItem("token", res.data.token));
  }

  return (
    <div className="w-[800px] mx-auto pt-[200px]">
      <div>
        <h2 className="text-[48px] font-[700] text-blue-500">Sign Up</h2>
        <p className="font-[400] gap-3 flex items-center text-[24px] leading-[38px] text-black">
          <i className="fa-solid fa-user"></i> Create Your Account
        </p>
      </div>
      <form className="flex flex-col mt-[20px]" onSubmit={handleSubmit}>
        <label>
          <input
            className="w-full p-[10px] mx-[0] my-[8px] border-[2px] border-[#ccc] rounded-[5px] text-[16px] [transition:0.3s]"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <input
            className="w-full p-[10px] mx-[0] my-[8px] border-[2px] border-[#ccc] rounded-[5px] text-[16px] [transition:0.3s]"
            type="email"
            placeholder="Email Address"
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
        <button className="w-[120px] h-[40px] bg-blue-500 font-[400] text-white text-[16px] mt-[20px]" type="submit">
          Register
        </button>
      </form>
      <Link className="text-[16px] text-blue-500 mt-[20px]" to="/login">
        Sign In
      </Link>
      <Link className="ml-[20px] mt-[20px]" to="/posts">
        Posts
      </Link>
    </div>
  );
}

export default Register;
