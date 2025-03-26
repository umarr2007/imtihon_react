import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");

    axios
      .get("https://nt-devconnector.onrender.com/api/posts", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Xatolik yuz berdi:", err));
  }, []);

  console.log(posts);

  return (
    <div>
      <h1 className="text-[45px] font-[700] text-[#17a2b8] ml-[460px]">Posts</h1>
      <p  className="font-[400] leading-[38px] text-[24px] ml-[460px]"><i className="fa-solid fa-circle-user mr-[10px]"></i>Welcome to the community</p>
      <div className="bg-[#17a2b8] w-[1000px] h-[40px] ml-[460px] mt-[20px]">
        <h3 className="font-[700] text-[20px] leading-[38px] text-[#fff] pl-[10px]" >Say Something...</h3>
      
      </div>
      {posts.map((post) => (
        <div className="flex justify-center mt-[10px]">
          <div className="p-6 border rounded-[5px] mt-[10px] bg-[#fff] 0 m-2 ml-[30px] w-[1000px]">
            <div className="flex items-center gap-[30px] ">
              <img className="rounded-full" src={`${post.avatar}`} alt="" />
              <div>
                <h2 className="font-[700] text-[25px] ">{post.name}</h2>
                <p className="font-[400] text-[14px]">{post.text}</p>
                <p className="font-[600]">{new Date(post.date).toLocaleDateString()}</p>
                <button className="bg-[#17a2b8] w-[130px] mt-[20px] h-[40px] text-[#fff] rounded-[4px]" to="/discussion">Discussion</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
