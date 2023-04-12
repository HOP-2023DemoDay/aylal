import React from "react";
import Landing1 from "../img/landing1.png";
import Landing2 from "../img/landing2.svg";
import Header from "../components/Header";
import CompanyCard from "../components/CompanyCard";
import Hutulbur from "../components/Hutulbur";
import clsx from "clsx";

const style = {
  too: "text-GreenText font-Poppins text-1xl ml-[1vw] text-bold sm:text-[5xl]",
  TooText: "text-DarkText font-Poppins text-[16px]",
  jijigTit:
    "text-GreenText font-Poppins text-[16px] w-screen flex justify-center",
  TomTit:
    "text-DarkText text-center font-Poppins  text-3xl sm:text-5xl font-bold w-screen flex justify-center",
};

const buttonClasses = {
  default: 'bg-blue-500 sm:bg-black px-4 py-2 rounded-md text-white font-bold',
 };
const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="absolute mt-[-8px]">
        <Header />
      </div>
      <img
        src={Landing1}
        alt="img"
        className="w-[100vw] h-[100vh] mt-[-3.5vh] bg-repeat"
      />
      <div className="mt-[-55vh] w-[30vw] ml-[35vw]">
        <p className="text-white font-Poppins text-[26px] sm:text-[46px] text-center">
          Explore the world with a smile
        </p>
        <p className="text-white font-Poppins text-[10px] text-center sm:text-[16px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo,
        </p>
      </div>

      <img
        src={Landing2}
        alt="img"
        className=" w-[34vw] mt-[50vh] ml-[10vw]  min:absolute  "
      />
      <div className="w-[40vw] ml-[50vw] mt-[-40vh]">
        <p className="text-GreenText font-Poppins text-[16px]">
          Travelers Point
        </p>
        <p className="font-Poppins text-1xl sm:text-5xl">
          We help to find your dream place
        </p>
        <p className="font-Poppins text-[10px] sm:text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi
        </p>

        <div className="w-[25vw] flex flex-wrap">
          <div className="w-[10vw] mt-[2vh]">
            <p className={clsx(style.too)}>100+</p>
            <p className={clsx(style.TooText)}>Holiday Package</p>
          </div>
          <div className="w-[10vw] mt-[2vh]">
            <p className={clsx(style.too)}>172</p>
            <p className={clsx(style.TooText)}>Hotels</p>
          </div>
          <div className="w-[10vw] mt-[2vh]">
            <p className={clsx(style.too)}>68</p>
            <p className={clsx(style.TooText)}>Elite Transportation</p>
          </div>
          <div className="w-[15vw] mt-[2vh]">
            <p className={clsx(style.too)}>32M+</p>
            <p className={clsx(style.TooText)}>
              we help to find your dream place
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[20vh]">
        <p className={clsx(style.jijigTit)}>top destination</p>
        <p className={clsx(style.TomTit)}>Discover your love</p>
        <div className="flex flex-wrap w-[80vw] h-[110vh] mx-[10vw] mt-[3vh] mb-[-20vh]">
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
      <div className="flex flex-wrap w-[82vw] h-[80vh] mx-[8vw] mt-[4vh]">
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
  <button className={clsx(buttonClasses.default)}>fretvtr2reds</button>
    </React.Fragment>
  );
};

export default LandingPage;
