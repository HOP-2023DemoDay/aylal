import React from "react";
import Landing1 from "../img/landing1.png";
import Landing2 from "../img/landing2.svg";
import CompanyCard from "../components/CompanyCard";
import Hutulbur from "../components/Hutulbur";
import clsx from "clsx";

//     16 3xl 5xl 1xl 10px 33px 18px 19px 15px
const style = {
  too: "text-Button font-Poppins text-[15px] font-light sm:text-5xl md:text-3xl sm:font-bold sm:text-GreenText",
  TooText: "text-DarkText font-Poppins md:w-[15vw] sm:text-[16px] md:text-2xl text-[6px]",
  jijigTit:
    "sm:text-[16px] text-[10px] text-GreenText font-Poppins w-screen flex justify-center font-bold ",
  TomTit:
    "sm:text-5xl text-2xl text-DarkText text-center font-Poppins font-bold w-screen flex justify-center font-bold",
  ml: 
    "ml-5",
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
        <p className="text-white font-Poppins text-center sm:text-[46px] md:text-[30px] text-[23px]">
          Explore the world with a smile
        </p>
        <p className="text-white font-Poppins text-center sm:text-[16px] md:text-[10px] text-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo,
        </p>
      </div>

      <img
        src={Landing2}
        alt="img"
        className=" w-[34vw] mt-[60vh] ml-[10vw]  sm:w-[35vw]"
      />
      <div className="w-[40vw] ml-[50vw] sm:mt-[-40vh] md:mt-[-30vh] mt-[-16vh]">
        <p className="text-GreenText font-Poppins text-[16px] font-bold">
          Travelers Point
        </p>
        <p className="font-Poppins text-1xl sm:text-5xl md:text-4xl font-bold">
          We help to find your dream place
        </p>
        <p className="font-Poppins text-[10px] sm:text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi
        </p>
      </div>

      <div className=" w-[28vw] flex flex-wrap ml-[15vw] mt-[-15vh] sm:mt-[5vh] sm:ml-[50vw] sm:w-[25vw]">
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
        <div className="w-[15vw] mt-[2vh]">
          <p className={clsx(style.too,style.ml)}>32M+</p>
          <p className={clsx(style.TooText)}>
            we help to find your dream place
          </p>
        </div>
      </div>

      <div className="sm:mt-[20vh] mt-[10vh]">
        <p className={clsx(style.jijigTit)}>top destination</p>
        <p className={clsx(style.TomTit)}>Discover your love</p>
        <div className="mt-[3vh] mb-[-10vh] w-screen sm:mx-[8vw] flex sm:flex-wrap sm:w-[80vw] sm:h-[110vh] overflow-x-auto overflow-y-hidden">
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
      <div className="w-screen h-[80vh] flex sm:flex-wrap sm:mx-[8vw] mt-[4vh] overflow-x-auto overflow-y-hidden">
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
