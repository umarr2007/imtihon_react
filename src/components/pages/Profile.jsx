import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Profile() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");

    axios
      .get("https://nt-devconnector.onrender.com/api/profile", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => setProfiles(res.data))
  }, []);

  console.log(profiles);

  return (
    
    <div>
        <h1 className="text-[45px] font-[700] text-[#17a2b8] ml-[30px]">Developers</h1>
        <p className="font-[400] text-[24px] text-[#333] ml-[30px]"> Browse and connect with developers</p>
      {profiles.map((profile) => (
        <div key={profile._id} className=" p-6 rounded-[10px] bg-[#f5f5f5] 0 m-2 ml-[30px]">
      

          <p className="font-[700] text-[24px] text-[#333]">{profile.githubusername}</p>
          <p className="font-[500] text-[#333] text-[16px] leading-[29px]">{profile.bio}</p>
          <p className="font-[500] text-[#333] text-[16px] leading-[29px] mt-[10px]" >{profile.company}</p>
          <p className="font-[500] text-[#17a2b8] text-[20px] text-center" > <i class="fa-solid fa-check"></i>{profile.skills}</p>
          <Link to={`/profile/${profile.user?._id}`}>
            <button className="bg-[#17a2b8] w-[150px] h-[40px] text-[#fff] rounded-[4px]">View Profile</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Profile;
