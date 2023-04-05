import React from "react";
import Landing1 from "../img/landing1.png"
import Landing2 from "../img/landing2.svg"



const LandingPage = () => {
  return (
  <div>
      <img src={Landing1} alt="img" className="w-screen h-screen mt-[-3.5vh]"/>
    <div className="mt-[-55vh] w-[30vw] ml-[35vw]">
      <p className="text-white font-Poppins text-[46px]" >Explore the world with a smile</p>
      <p className="text-white font-Poppins text-[16px] text-center" >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,</p>
    </div>
      <img src={Landing2} alt="img" className=" w-[34vw] mt-[50vh] ml-[10vw]"/>
      <div className="w-[40vw] ml-[50vw] mt-[-30vh]" >
        <p className="text-[#295943] font-Poppins text-[16px]" >Travelers Point</p>
        <p className="font-Poppins text-5xl" >We help to find your dream place</p>
        <p className="font-Poppins text-[16px]" >Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi</p>
      </div>
      <p className="text-[#295943] font-Poppins text-[16px]" >top destination</p>
      <p className="text-[#3D3E48] font-Poppins text-5xl font-bold" >Discover your love</p>
      <p className="text-[#295943] font-Poppins text-[16px]" >Testimonial</p>
      <p className="text-[#3D3E48] font-Poppins text-5xl font-bold" >What they say about us</p>
  </div>
    )
};

export default LandingPage;