import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Addid() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.ashyo.fullstackdev.uz/users/${id}`)
      .then((res) => {
        setTeacher(res.data);
      })
      .catch((err) => {
        console.log("Xatolik yuz berdi:", err);
      });
  }, [id]);
  return (
    <div>
      <div className="flex">
        <div className="left w-[281px] h-[100vh] bg-[#152259]">
          <div className="flex items-center flex-col p-[26px]">
            <img src="/rasm1.svg" alt="" />
            <h2 className="mt-[22px] font-semibold text-[14px] text-[#fff]">
              Udemy Inter. school
            </h2>
          </div>
          <hr className="border-[#fff]" />

          <div className="mt-[25px] p-[25px]  flex flex-col gap-[8px]">
            <div className="flex  active:bg-[#509cdb] rounded py-3 px-4 gap-[20px]">
              <img src="/rasm2.svg" alt="" />
              <h3 className="font-semibold text-[14px] text-[#fff]">
                <Link to="/dashboard">Dashboard</Link>
              </h3>
            </div>

            <div className="flex  active:bg-[#509cdb]  rounded py-3 px-4 gap-[20px]">
              <img src="/rasm2.svg" alt="" />
              <h3 className="font-semibold text-[14px] text-[#fff]">
                <Link to="/teacher">Teachers</Link>
              </h3>
            </div>

            <div className="flex active:bg-[#509cdb]  rounded py-3 px-4 gap-[20px] ">
              <img src="/rasm3.svg" alt="" />
              <h3 className="font-semibold text-[14px] text-[#fff]">
                <Link>Student</Link>
              </h3>
            </div>

            <div className="flex  active:bg-[#509cdb] rounded py-3 px-4 gap-[20px]">
              <img src="/rasm4.svg" alt="billing" />

              <h3 className="font-semibold text-[14px] text-[#fff]">
                <Link>Billing</Link>
              </h3>
            </div>

            <div className="flex  active:bg-[#509cdb] rounded py-3 px-4 gap-[20px]">
              <img src="/rasm5.svg" alt="" />
              <h3 className="font-semibold text-[14px] text-[#fff]">
                Settings and profile
              </h3>
            </div>

            <div className="flex active:bg-[#509cdb]  rounded py-3 px-4 gap-[20px]">
              <img src="/rasm6.svg" alt="" />
              <h3 className="font-semibold text-[14px] text-[#fff]">
                <Link>Exams</Link>
              </h3>
            </div>

            <div className="flex  active:bg-[#509cdb] mt-[120px] rounded py-3 px-4 gap-[20px]">
              <img src="/rasm6.svg" alt="" />
              <h3 className="font-semibold text-[14px] text-[#fff]">
                <Link>Features</Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="main w-full ">
          <div className="w-full px-[150px] mt-[205px]">
            <div className="p-4 space-y-2 flex gap-[90px] justify-center items-center">
              <div>
                <img className="w-[280px]" src="/user.png" alt="" />
              </div>
              <div>
                {teacher && (
                  <div>
                    <h1 className="font-semibold text-[12px] text-[#1a1a1a]">
                      Fullname:
                    </h1>
                    <p className="font-medium text-[18px] text-[#a7a7a7]">
                      {" "}
                      {teacher.fullname}
                    </p>
                    
                      <h1  className="font-semibold text-[12px] text-[#1a1a1a]">Email:</h1>
                      <p className="font-medium text-[18px] text-[#a7a7a7]" > {teacher.email}</p>
                    

                    <h1 className="font-semibold text-[12px] text-[#1a1a1a]" >Phone....</h1>
                    <p className="font-medium text-[18px] text-[#a7a7a7]">{teacher.phone_number}</p>

                    <h1 className="font-semibold text-[12px] text-[#1a1a1a]">Password:</h1>
                    <p className="font-medium text-[18px] text-[#a7a7a7]" > {teacher.password}</p>

                    <h1 className="font-semibold text-[12px] text-[#1a1a1a]">Role:</h1>
                    <p className="font-medium text-[18px] text-[#a7a7a7]" >{teacher.role}</p>
                  </div>
                )}
                <button
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => navigate("/teacher")}
                >
                  Orqaga
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addid;
