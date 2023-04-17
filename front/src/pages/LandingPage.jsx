import React from "react";
import Landing1 from "../img/landing1.png";
import Landing2 from "../img/landing2.svg";
import CompanyCard from "../components/CompanyCard";
import Hutulbur from "../components/Hutulbur";
import clsx from "clsx";

//     16 3xl 5xl 1xl 10px 33px 18px 19px 15px
const style = {
  too: "text-GreenText font-Poppins text-[45px] font-bold sm:text-5xl md:text-2xl sm:font-bold sm:text-GreenText lg:text-[35px]",
  TooText: "text-DarkText font-Poppins md:w-[15vw] sm:text-[16px] md:text-lg text-[16px] lg:text-[15px]",
  jijigTit:
    "sm:text-[16px] text-[16px] text-GreenText font-Poppins w-screen flex justify-center font-bold md:text:[25px] ",
  TomTit:
    "sm:text-5xl text-3xl text-DarkText text-center font-Poppins font-bold w-screen flex justify-center font-bold",
};
const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <img
        src={Landing1}
        alt="img"
        className="sm:w-screen mt-[-2.7vh] bg-repeat   h-screen w-[100vw]"
      />
      <div className="sm:mt-[-55vh] sm:w-[30vw] sm:ml-[35vw] sm:mt-[-60vh] mt-[-60vh] w-[50vw] ml-[25vw]">
        <p className="text-white font-Poppins text-center sm:text-[46px] md:text-[30px] lg:text-[30px] text-[46px]">
          Explore the world with a smile
        </p>
        <p className="text-white font-Poppins text-center sm:text-[16px] md:text-[10px] text-[18px] lg:text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo,
        </p>
      </div>

      <img
        src={Landing2}
        alt="img"
        className=" w-[34vw] mt-[70vh] ml-[10vw]  sm:w-[35vw] md:w-[40vw] md:ml-[5vw] lg:mt-[60vh]"
      />
      <div className="w-[40vw] ml-[50vw] sm:mt-[-40vh] md:mt-[-30vh] mt-[-40vh] lg:mt-[-35vh]">
        <p className="text-GreenText font-Poppins text-[28px] font-bold md:mt-[5vh] lg:text-[25px] mt-[-5vh]">
          Travelers Point
        </p>
        <p className="font-Poppins text-[28px] sm:text-5xl md:text-4xl font-bold">
          We help to find your dream place
        </p>
        <p className="font-Poppins text-[16px] sm:text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi
        </p>      
        <div className=" w-[28vw] flex flex-wrap mt-0 sm:mt-[5vh] sm:ml-[50vw] sm:w-[25vw]">
        <div className="w-[10vw] mt-[2vh] md:w-[15vw]">
          <p className={clsx(style.too)}>100+</p>
          <p className={clsx(style.TooText)}>Holiday Package</p>
        </div>
        <div className="w-[10vw] mt-[2vh]">
          <p className={clsx(style.too)}>172</p>
          <p className={clsx(style.TooText)}>Hotels</p>
        </div>
        <div className="w-[10vw] mt-[2vh]">
          <p className={clsx(style.too)}>68</p>
          <p className={clsx(style.TooText)}>Elite</p>
        </div>
        <div className="w-[15vw] mt-[2vh] md:ml-[2vw]">
          <p className={clsx(style.too,style.ml)}>32M+</p>
          <p className={clsx(style.TooText , "md:ml-[2vw]")}>
            we help to find your dream place
          </p>
        </div>
      </div>
      </div>



      <div className="sm:mt-[20vh] mt-[30vh]">
        <p className={clsx(style.jijigTit)}>top destination</p>
        <p className={clsx(style.TomTit)}>Discover your love</p>
        <div className="mt-[3vh] mb-[-10vh] w-screen sm:mx-[8vw] flex sm:flex-wrap sm:w-[80vw] sm:h-[110vh] overflow-x-auto">
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
        </div>
      </div>

      <div className="mt-[20vh]">
        <p className={clsx(style.jijigTit)}>Testimonial</p>
        <p className={clsx(style.TomTit)}>What they say about us</p>
      </div>
      <div className="w-screen h-[80vh] flex sm:flex-wrap sm:mx-[8vw] mt-[4vh] sm:overflow-x-auto overflow-y-hidden">
        <Hutulbur />
        <Hutulbur />
        <Hutulbur />
        <Hutulbur />
        <Hutulbur />
        <Hutulbur />
        <Hutulbur />
        <Hutulbur />
        <Hutulbur />
      </div>
    </div>
  );
};

export default LandingPage;
