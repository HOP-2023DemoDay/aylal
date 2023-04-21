import React from "react";
import Landing1 from "../img/landing1.png";
import Landing2 from "../img/landing2.svg";
import CompanyCard from "../components/CompanyCard";
import Hutulbur from "../components/Hutulbur";
import clsx from "clsx";

//       5xl 3xl 1xl 33px 19px 18px 16px 15px 10px
const style = {
  too: "text-GreenText font-Poppins text-[45px] font-bold sm:text-5xl smmmd:text-2xl smm:text-2xl sm:text-GreenText lg:text-[18px]",
  TooText: "text-DarkText font-Poppins text-[16px] lg:text-[16px]",
  jijigTit:"text-[16px] text-GreenText font-Poppins w-screen flex justify-center font-bold ",
  TomTit:"text-3xl text-DarkText text-center font-Poppins font-bold w-screen flex justify-center font-bold",
  Cards:"w-screen flex sm:flex-wrap overflow-x-auto mt-[5vh]",
};
const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <img
        src={Landing1}
        alt="img"
        className="sm:w-screen bg-repeat h-screen w-screen"
      />
      <div className="mt-[-100vh] w-screen flex justify-center items-center h-screen">
        <p className="text-white font-Poppins text-center text-[48px] Txl:text-[60px] sm:text-[46px] smm:text-[25px] md:text-[30px] lg:text-[30px] mt-[-48px] w-screen flex justify-center">
          Explore the world with a smile
        </p>
        <p className="text-white font-Poppins text-center text-[16px] smm:w-[80vw] mt-[150px] absolute w-[700px] Txl:text-[20px] smm:text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo,
        </p>
      </div>

      <img
        src={Landing2}
        alt="img"
        className=" w-[34vw] mt-[20vh] ml-[10vw] lg:w-[40vw] lg:ml-[8vw] smmmd:hidden smm:hidden"
      />
      <div className="w-[40vw] ml-[50vw] sm:mt-[-40vh] mt-[-40vh] lg:mt-[-35vh] smmmd:mt-[15vh] smmmd:mb-[-15vh] smmmd:ml-[25vw] smmmd:w-screen smm:mt-[15vh] smm:ml-[5vw]">
        <p className="text-GreenText font-Poppins text-[28px] font-bold smmmd:mt-[5vh] lg:text-[25px] mt-[-5vh] lg:text-[25px] smmmd:mt-[50vh] smmmd:w-screen smm:text-[23px]">
          Travelers Point
        </p>
        <p className="font-Poppins text-[28px] font-bold lg:text-[20px] smmmd:w-screen smm:w-screen smm:text-[25px]">
          We help to find your dream place
        </p>
        <p className="font-Poppins text-[16px] smmmd:w-[50vw] smm:w-[90vw] smm:text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi
        </p>      
        <div className=" w-[28vw] flex flex-wrap mt-0">
        <div className="w-[10vw] mt-[2vh]">
          <p className={clsx(style.too)}>100+</p>
          <p className={clsx(style.TooText)}>Holiday Package</p>
        </div>
        <div className="w-[10vw] mt-[2vh]">
          <p className={clsx(style.too , " smmmd:ml-[3vw] smm:ml-[20vw]")}>172</p>
          <p className={clsx(style.TooText , "smmmd:ml-[3vw] smm:ml-[20vw]")}>Hotels</p>
        </div>
        <div className="w-[10vw] mt-[2vh]">
          <p className={clsx(style.too)}>68</p>
          <p className={clsx(style.TooText)}>Elite</p>
        </div>
        <div className="w-[15vw] mt-[2vh] md:ml-[2vw]">
          <p className={clsx(style.too,style.ml , "smmmd:ml-[3vw] smm:ml-[20vw]")}>32M+</p>
          <p className={clsx(style.TooText , "smmmd:ml-[3vw] smm:ml-[20vw] smm:w-[20vw]")}>
            we help to find your dream place
          </p>
        </div>
      </div>
      </div>



      <div className="sm:mt-[20vh] mt-[20vh] mmmd:mt-[-10vh]">
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
