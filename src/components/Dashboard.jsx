import React from "react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
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
                <Link>Dashboard</Link>
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
          <div className="px-[150px] mt-[42px] flex items-center  justify-between ">
            <h2 className="font-medium text-[16px] text-[#424242]">
              Learn how to launch faster <br /> watch our webinar for tips from
              our experts and get a limited time offer.
            </h2>
            <div className="flex gap-[20px]">
              <img src="./rasm7.svg" alt="" />
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
                className="rounded-[8px] p-[10px] w-[120px] h-[40px] bg-[#509cdb] font-semibold text-[14px] text-center text-[#fcfafa]"
              >
                Log out
              </button>
            </div>{" "}
          </div>
          <div className="w-full px-[150px] mt-[55px]">
            <div>
              <h1 className="font-semibold text-[36px]  text-[#4f4f4f]">
                Welcome to your dashboard, Udemy school
              </h1>
              <p className="font-semibold text-[24px] ml-[70px] mt-[23px] text-[#4f4f4f]">
                Uyo/school/@teachable.com
              </p>
            </div>

            <div className="">
              <div className="flex items-center mt-[60px] gap-[30px]">
                <div className="rounded-[8px] mb-[40px] flex items-center justify-center  ml-[70px] w-[36px] h-[36px] bg-[#eff3fa]">
                  <div>
                    <img src="./person.svg" alt="" />
                  </div>
                </div>
                <div>
                  <h2 className="font-medium text-[24px] text-[#4f4f4f]">
                    Add other admins{" "}
                  </h2>
                  <p className="font-normal text-[14px] text-[#4f4f4f] mt-[16px]">
                    Create rich course content and coaching products for your
                    students. <br /> When you give them a pricing plan, they’ll
                    appear on your site!
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex items-center mt-[60px] gap-[30px]">
                <div className="rounded-[8px] mb-[40px] flex items-center justify-center  ml-[70px] w-[36px] h-[36px] bg-[#eff3fa]">
                  <div>
                    <img src="./bino.svg" alt="" />
                  </div>
                </div>
                <div>
                  <h2 className="font-medium text-[24px] text-[#4f4f4f]">
                    Add classes{" "}
                  </h2>
                  <p className="font-normal text-[14px] text-[#4f4f4f] mt-[16px]">
                    Create rich course content and coaching products for your
                    students. <br /> When you give them a pricing plan, they’ll
                    appear on your site!
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex justify-between">
                <div className="flex items-center mt-[60px] gap-[30px]">
                  <div className="rounded-[8px] mb-[40px] flex items-center justify-center ml-[70px] w-[36px] h-[36px] bg-[#eff3fa]">
                    <div>
                      <img src="./person.svg" alt="" />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-medium text-[24px] text-[#4f4f4f]">
                      Add students{" "}
                    </h2>
                    <p className="font-normal text-[14px] text-[#4f4f4f] mt-[16px]">
                      Create rich course content and coaching products for your
                      students. <br /> When you give them a pricing plan,
                      they’ll appear on your site!
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="rounded-[30px] mb-[30px] w-[181px] flex px-[20px] gap-[15px] items-center h-[60px] bg-[#152259] font-semibold text-[14px] text-[#fcfafa]">
                    <img src="./rasm9.svg" alt="" /> Support{" "}
                    <img src="./rasm10.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;