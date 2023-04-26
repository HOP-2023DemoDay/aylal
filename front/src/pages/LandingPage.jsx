import React from "react";
import Landing1 from "../img/landing1.png";
import Landing2 from "../img/landing2.svg";
import CompanyCard from "../components/CompanyCard";
import Hutulbur from "../components/Hutulbur";
import clsx from "clsx";

//       5xl 3xl 1xl 33px 19px 18px 16px 15px 10px
const style = {
  too: "text-GreenText font-Poppins text-[25px] xl:text-[35px] lg:text-[30px] 2xl:text-[35px] font-bold sm:text-5xl sm:text-GreenText lg:text-[18px]",
  TooText: "text-DarkText font-Poppins text-[16px] lg:text-[16px]",
  TooBox: "w-[20vw] mt-[2vh] 2xl:w-[10vw] xl:w-[10vw] lg:w-[10vw] md:w-[10vw] sm:w-[10vw]",
  ImgText: "2xl:w-[30vw] sm:w-[30vw] md:w-[30vw] lg:w-[30vw] xl:w-[30vw] w-[90vw] mx-[5vw] sm:mt-[-40vh] mt-[10vh] lg:mt-[-35vh] 2xl:mt-[-40vh] 2xl:ml-[60vw] xl:mt-[-40vh] xl:ml-[60vw] lg:mt-[-40vh] lg:ml-[60vw] md:mt-[-30vh] md:ml-[60vw] sm:mt-[-40vh] sm:ml-[60vw]",
  jijigTit:
    "text-[16px] text-GreenText font-Poppins w-screen flex justify-center font-bold ",
  TomTit:
    "text-3xl text-DarkText text-center font-Poppins font-bold w-screen flex justify-center font-bold",
  Cards: "w-screen flex sm:flex-wrap overflow-x-auto mt-[5vh]",
};

const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <img
        src={Landing1}
        alt="img"
        className="sm:w-screen object-cover h-screen w-screen"
      />
      <div className="mt-[-100vh] w-screen flex justify-center items-center h-screen ">
        <p className="text-white font-Poppins text-center text-[30px] 2xl:text-[60px] sm:text-[46px] md:text-[30px] lg:text-[30px] mt-[-48px] flex justify-center">
          Explore the world with a smile
        </p>
        <p className="text-white font-Poppins text-center text-[14px] mt-[150px] absolute 2xl:text-[20px] mx-[5vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo,
        </p>
      </div>

      <img
        src={Landing2}
        alt="img"
        className=" w-[90vw] mt-[10vh] mx-[5vw] md:w-[40vw] md:mt-[20vh] md:ml-[10vw] xl:w-[40vw] xl:mt-[20vh] xl:ml-[10vw] 2xl:w-[40vw] 2xl:mt-[20vh] 2xl:ml-[10vw]  lg:w-[40vw] lg:ml-[8vw] "
      />
      <div className={clsx(style.ImgText)}>
        <p className="text-GreenText font-Poppins text-[28px] font-bold lg:text-[25px] mt-[-5vh] lg:text-[25px]">
          Travelers Point
        </p>
        <p className="font-Poppins text-[28px] font-bold lg:text-[20px]">
          We help to find your dream place
        </p>
        <p className="font-Poppins text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi
        </p>
        <div className="2xl:w-[28vw] sm:w-[28vw] md:w-[28vw] lg:w-[28vw] xl:w-[28vw] w-[50vw] flex flex-wrap mt-0">
          <div className={clsx(style.TooBox)}>
            <p className={clsx(style.too)}>100+</p>
            <p className={clsx(style.TooText)}>Holiday Package</p>
          </div>
          <div className={clsx(style.TooBox)}>
            <p className={clsx(style.too)}>172</p>
            <p className={clsx(style.TooText)}>Hotels</p>
          </div>
          <div className={clsx(style.TooBox)}>
            <p className={clsx(style.too)}>68</p>
            <p className={clsx(style.TooText)}>Elite</p>
          </div>
          <div className={clsx(style.TooBox)}>
            <p className={clsx(style.too)}>32M+</p>
            <p className={clsx(style.TooText)}>
              we help to find your dream place
            </p>
          </div>
        </div>
      </div>

      <div className="sm:mt-[20vh] mt-[20vh]">
        <p className={clsx(style.jijigTit)}>top destination</p>
        <p className={clsx(style.TomTit)}>Discover your love</p>
        <div className={clsx(style.Cards)}>
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
        </div>
        <div className={clsx(style.Cards)}>
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
        </div>
      </div>

      <div className="mt-[10vh]">
        <p className={clsx(style.jijigTit)}>Testimonial</p>
        <p className={clsx(style.TomTit)}>What they say about us</p>
      </div>
      <div className={clsx(style.Cards, "pb-[5vh]")}>
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
