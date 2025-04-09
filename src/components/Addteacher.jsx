import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Addteacher({ AddTeacher }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("fullname", String(fullname));
    formData.append("email", String(email));
    formData.append("phone_number", String(phone));
    formData.append("password", String(password));
    formData.append("Role", "USER");
    formData.append("is_verified", "false");

    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    axios
      .post(
        "https://api.ashyo.fullstackdev.uz/users/add",
        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        navigate("/teacher");
      })
      .catch((err) => {
        console.log("Xatolik yuz berdi:", err);
      });
  };

  return (
    <div className="flex">
      
      <div className="left w-[281px] h-[100vh] bg-[#152259]">
        <div className="flex items-center flex-col p-[26px]">
          <img src="./rasm1.svg" alt="" />
          <h2 className="mt-[22px] font-semibold text-[14px] text-[#fff]">
            Udemy Inter. school
          </h2>
        </div>
        <hr className="border-[#fff]" />
        <div className="mt-[25px] p-[25px] flex flex-col gap-[8px]">
          <div className="flex active:bg-[#509cdb] rounded py-3 px-4 gap-[20px]">
            <img src="./rasm2.svg" alt="" />
            <h3 className="font-semibold text-[14px] text-[#fff]">
              <Link to="/dashboard">Dashboard</Link>
            </h3>
          </div>
            
          <div className="flex active:bg-[#509cdb] rounded py-3 px-4 gap-[20px]">
            <img src="./rasm2.svg" alt="" />
            <h3 className="font-semibold text-[14px] text-[#fff]">
              <Link to="/teacher">Teachers</Link>
            </h3>
          </div>

          <div className="flex active:bg-[#509cdb] rounded py-3 px-4 gap-[20px]">
            <img src="./rasm3.svg" alt="" />
            <h3 className="font-semibold text-[14px] text-[#fff]">
              <Link>Student</Link>
            </h3>
          </div>

          <div className="flex active:bg-[#509cdb] rounded py-3 px-4 gap-[20px]">
            <img src="./rasm4.svg" alt="" />
            <h3 className="font-semibold text-[14px] text-[#fff]">
              <Link>Billing</Link>
            </h3>
          </div>

          <div className="flex active:bg-[#509cdb] rounded py-3 px-4 gap-[20px]">
            <img src="./rasm5.svg" alt="" />
            <h3 className="font-semibold text-[14px] text-[#fff]">
              Settings and profile
            </h3>
          </div>

          <div className="flex active:bg-[#509cdb] rounded py-3 px-4 gap-[20px]">
            <img src="./rasm6.svg" alt="" />
            <h3 className="font-semibold text-[14px] text-[#fff]">
              <Link>Exams</Link>
            </h3>
          </div>

          <div className="flex active:bg-[#509cdb] mt-[120px] rounded py-3 px-4 gap-[20px]">
            <img src="./rasm6.svg" alt="" />
            <h3 className="font-semibold text-[14px] text-[#fff]">
              <Link>Features</Link>
            </h3>
          </div>
        </div>
      </div>

      <div className="main w-full px-[150px] mt-[42px]">
        <div className="flex items-center justify-end gap-[20px]">
          <img src="./rasm7.svg" alt="" />
          <button className="font-semibold text-[14px] text-[#000]">
            Log out
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[50px] mt-[50px]"
        >
          <div className="flex items-center justify-between">
            <h1 className="font-medium text-[20px] text-[#4f4f4f]"> Add Teacher</h1>
            <button
              type="submit"
              className="rounded-[4px] px-[14px] py-[12px] w-[118px] h-[41px] bg-[#509cdb] font-semibold text-[14px] text-[#fff]"
            >
              Save
            </button>
          </div>

          <div className="flex gap-[45px]">
            <label className="flex flex-col text-[14px] font-medium text-[#8a8a8a]">
              Full Name
              <input
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
                className="border border-[#a7a7a7] rounded-[4px] w-[407px] h-[42px]"
              />
            </label>

            <label className="flex flex-col text-[14px] font-medium text-[#8a8a8a]">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-[#a7a7a7] rounded-[4px] w-[407px] h-[42px]"
              />
            </label>
          </div>

          <div className="flex gap-[45px] ">
            <label className="flex flex-col text-[14px] font-medium text-[#8a8a8a]">
              Phone Number
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9+]/g, "");
                  setPhone(value);
                }}
                required
                className="border border-[#a7a7a7] rounded-[4px] w-[407px] h-[42px]"
              />
            </label>

            <label className="flex flex-col text-[14px] font-medium text-[#8a8a8a]">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border border-[#a7a7a7] rounded-[4px] w-[407px] h-[42px]"
              />
            </label>
          </div>

          <div className="flex gap-[45px]">
            <label className="flex flex-col text-[14px] font-medium text-[#8a8a8a]">
              About
              <textarea className="border border-[#a7a7a7] rounded-[4px]  w-[407px]  h-[42px]"></textarea>
            </label>

            <label className="flex flex-col text-[14px] font-medium text-[#8a8a8a]">
              Profile Image (optional)
              <input
                type="file"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                className="border border-[#a7a7a7] rounded-[4px] w-[407px] h-[42px]"
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Addteacher;
