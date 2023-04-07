import React from "react";
import Landing1 from "../img/landing1.png";
import Landing2 from "../img/landing2.svg";
import clsx from "clsx";

const style = {
  too: "text-GreenText font-Poppins text-5xl text-bold     sm:text-[4xl]",
  TooText: "text-DarkText font-Poppins text-[16px]",
  jijigTit: "text-GreenText font-Poppins text-[16px]  w-screen flex justify-center",
  TomTit: "text-DarkText font-Poppins text-5xl font-bold  w-screen flex justify-center",
};

const LandingPage = () => {
  return (
    <React.Fragment>
      <img
        src={Landing1}
        alt="img"
        className="w-screen h-screen mt-[-3.5vh] bg-repeat"
      />
      <div className="mt-[-55vh] w-[30vw] ml-[35vw]">
        <p className="text-white font-Poppins text-[46px]">
          Explore the world with a smile
        </p>
        <p className="text-white font-Poppins text-[16px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo,
        </p>
      </div>

      <img src={Landing2} alt="img" className=" w-[34vw] mt-[50vh] ml-[10vw]" />
      <div className="w-[40vw] ml-[50vw] mt-[-40vh]">
        <p className="text-GreenText font-Poppins text-[16px]">
          Travelers Point
        </p>
        <p className="font-Poppins text-5xl">
          We help to find your dream place
        </p>
        <p className="font-Poppins text-[16px]">
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
      </div>

      <div className="mt-[20vh]">
        <p className={clsx(style.jijigTit)}>Testimonial</p>
        <p className={clsx(style.TomTit)}>What they say about us</p>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
