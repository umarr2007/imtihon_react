import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function ProfileDetails() {
  const [profile, setProfile] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let token = localStorage.getItem("token");

    axios
      .get(`https://nt-devconnector.onrender.com/api/profile/user/${id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => setProfile(res.data)) 
      .catch((err) => console.error("Error fetching profile:", err));
  }, []);

  console.log(profile);
  return (
    <div>
      <div className="border p-2 border-red-400 m-2">
        <h2>{profile.name}</h2>
        <p>{profile.githubusername}</p>
        <p>{profile.bio}</p>

      </div>
    </div>
  );
}

export default ProfileDetails;
