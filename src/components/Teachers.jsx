import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const qidirish = teachers.filter((teacher) => {
    return teacher.fullname.toLowerCase().includes(search.toLowerCase());
  });
  useEffect(() => {
    axios
      .get("https://api.ashyo.fullstackdev.uz/users")
      .then((res) => {
        setTeachers(res.data);
      })
      .catch((err) => {
        console.log("Xatolik yuz berdi:", err);
      });
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="left w-[281px] h-[100vh] bg-[#152259]">
          <div className="flex items-center flex-col p-[26px]">
            <img src="./rasm1.svg" alt="" />
            <h2 className="mt-[22px] font-semibold text-[14px] text-[#fff]">
              Udemy Inter. school
            </h2>
          </div>
          <hr className="border-[#fff]" />

          <div className="mt-[25px] p-[25px]  flex flex-col gap-[8px]">
            <div className="flex  active:bg-[#509cdb] rounded py-3 px-4 gap-[20px]">
              <img src="./rasm2.svg" alt="" />
              <h3 className="font-semibold text-[14px] text-[#fff]">
                <Link to="/dashboard">Dashboard</Link>
              </h3>
            </div>

            <div className="flex  active:bg-[#509cdb]  rounded py-3 px-4 gap-[20px]">
              <img src="./rasm2.svg" alt="" />
              <h3 className="font-semibold text-[14px] text-[#fff]">
                <Link to="/teacher">Teachers</Link>
              </h3>
            </div>

            <div className="flex active:bg-[#509cdb]  rounded py-3 px-4 gap-[20px] ">
              <img src="./rasm3.svg" alt="" />
              <h3 className="font-semibold text-[14px] text-[#fff]">
                <Link>Student</Link>
              </h3>
            </div>

            <div className="flex  active:bg-[#509cdb] rounded py-3 px-4 gap-[20px]">
              <img src="./rasm4.svg" alt="" />
              <h3 className="font-semibold text-[14px] text-[#fff]">
                <Link>Billing</Link>
              </h3>
            </div>

            <div className="flex  active:bg-[#509cdb] rounded py-3 px-4 gap-[20px]">
              <img src="./rasm5.svg" alt="" />
              <h3 className="font-semibold text-[14px] text-[#fff]">
                Settings and profile
              </h3>
            </div>

            <div className="flex active:bg-[#509cdb]  rounded py-3 px-4 gap-[20px]">
              <img src="./rasm6.svg" alt="" />
              <h3 className="font-semibold text-[14px] text-[#fff]">
                <Link>Exams</Link>
              </h3>
            </div>

            <div className="flex  active:bg-[#509cdb] mt-[120px] rounded py-3 px-4 gap-[20px]">
              <img src="./rasm6.svg" alt="" />
              <h3 className="font-semibold text-[14px] text-[#fff]">
                <Link>Features</Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="main w-full ">
          <div className="px-[150px] mt-[42px]  ">
            <div className="flex items-center  justify-end gap-[20px]">
              <img src="./rasm7.svg" alt="" />
              <button className="  font-semibold text-[14px] text-center text-[#000]">
                Log out
              </button>
            </div>{" "}
            <div className="flex items-center  justify-between mt-[16px]">
              <h1 className="font-medium text-[20px] text-center text-[#4f4f4f]">
                Teachers
              </h1>
              <button className="rounded-[4px] px-[14px] py-[12px] w-[118px] h-[41px] bg-[#509cdb] font-semibold text-[14px] text-center text-[#fff]">
                <Link to="/addteacher"> Add teacher</Link>
              </button>
            </div>
          </div>
          <div className="w-full px-[150px] mt-[55px]">
            <div>
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="pl-[16px] pr-[20px] py-[16px]  h-[49px] w-full bg-[#fcfafa]"
                placeholder="Search for a student by name or email "
              />
            </div>

            <div className="mt-[50px]">
              <h2 className="text-[18px] font-semibold mb-4">All Teachers</h2>

              {teachers.length == 0 ? (
                <div className="w-full h-[459px] mt-[60px] bg-[#fcfafa]">
                  <div className="flex justify-center items-center pt-[30px]">
                    <img src="./rasm11.svg" alt="" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[28px] text-center text-[#4f4f4f]">
                      No Teachers at this time
                    </h2>
                    <p className="font-medium text-[14px] text-[#4f4f4f] text-center">
                      Teachers will appear here after they enroll in your
                      school.
                    </p>
                    <div className="flex justify-end pr-[20px] pt-[20px]">
                      <button className="rounded-[30px] mb-[30px] w-[181px] flex px-[20px] gap-[15px] items-center h-[60px] bg-[#152259] font-semibold text-[14px] text-[#fcfafa]">
                        <img src="./rasm9.svg" alt="" /> Support
                        <img src="./rasm10.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="overflow-x-auto overflow-y-auto max-h-[600px]">
                  <table className="min-w-full ">
                    <thead className="">
                      <tr>
                        <th className="text-left p-3 font-bold text-[12px] text-[#424242]">
                          Fullname
                        </th>
                        <th className="text-left p-3 font-bold text-[12px] text-[#424242] ">
                          Email
                        </th>
                        <th className="text-left p-3  font-bold text-[12px] text-[#424242]">
                          Role
                        </th>
                        <th className="text-left p-3 font-bold text-[12px] text-[#424242] ">
                          Password
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {qidirish.map((teacher, index) => (
                        <tr
                          key={index}
                          onClick={() => navigate(`/add/${teacher.id}`)}
                        >
                          <td className="p-3  font-medium text-[14px] text-[#4f4f4f]">
                            {teacher.fullname}
                          </td>
                          <td className="p-3 font-medium text-[14px] text-[#4f4f4f] ">
                            {teacher.email}
                          </td>
                          <td className="p-3 font-medium text-[14px] text-[#4f4f4f] ">
                            {teacher.role}
                          </td>
                          <td className="p-3 font-medium text-[14px] text-[#4f4f4f] ">
                            {teacher.password}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Teachers;
