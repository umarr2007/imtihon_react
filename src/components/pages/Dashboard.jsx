import React from 'react'

function Dashboard() {
  return (
    <div>
        <h1 className='font-[700] text-[#17a2b8] leading-[58px] text-[48px] mt-[20px] ml-[300px]'>Dashboard</h1>
        <h3 className='font-[400] text-[24px] leading-[38px] ml-[300px] mt-[20px] '   > <i className="fa-solid fa-circle-user mr-[10px]"></i>Welcome....</h3>
        <h4 className='font-[400] text-[16px] leading-[38px] ml-[300px] mt-[15px] ' >You have not yet setup a profile, please add some info</h4>
        <button  className="bg-[#17a2b8] w-[150px] h-[40px] text-[#fff] rounded-[2px] ml-[300px] mt-[20px]">Create Profile</button>
      
    </div>
  )
}

export default Dashboard
