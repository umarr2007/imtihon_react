import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!fullname || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    axios
      .post("https://api.ashyo.fullstackdev.uz/auth/register", {
        fullname,
        email,
        password,
      })
      .then((res) => {
        if (res.data.accessToken) {
          localStorage.setItem("token", res.data.accessToken);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.error("Ro'yxatdan o'tishda xatolik:", err);
        alert("Ro'yxatdan o'tishda xatolik yuz berdi.");
      });
  }

  return (
    <div className="bg-stone-50 h-screen w-screen">
      <div className="container mx-auto p-[100px]">
        <h1 className="font-semibold text-[36px] text-center text-[#4f4f4f]">
          Welcome, Sign up
        </h1>
        <div className="mt-[60px]">
          <div className="bg-white w-[515px] h-[494px] flex justify-center items-center mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[10px] justify-center items-center "
            >
              <h3 className="font-medium text-[16px] leading-[1.5625] text-center text-[#667085]">
                It is our great pleasure to have <br /> you on board!{" "}
              </h3>
              <input
                className="border-[0.50px] pl-[10px] border-[#a7a7a7] rounded-[4px] w-[248px] h-[42px] mt-[15px]"
                type="email"
                placeholder=" Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="border-[0.50px]  border-[#a7a7a7] pl-[10px] rounded-[4px] w-[248px] h-[42px] mt-[15px]"
                type="text"
                placeholder="Create your Login"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <input
                className="border-[0.50px]  border-[#a7a7a7] rounded-[4px] pl-[10px] w-[248px] h-[42px] mt-[15px]"
                type="password"
                placeholder="Create your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-red-500">{error}</p>}{" "}
              <button
                className="rounded-[4px] bg-[#2d88d4] stroke-[0.50px] stroke-[#a7a7a7] w-[250px] h-[42px] font-bold text-[14px] text-[#fff] mt-[10px]"
                type="submit"
              >
                Sign up
              </button>
              <Link
                to="/login"
                className="font-bold text-[12px] leading-loose text-center text-[#2d88d4]"
              >
                Sign In
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
