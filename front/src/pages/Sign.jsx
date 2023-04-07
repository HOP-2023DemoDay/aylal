import React from "react";
import arrow from "../img/arrow.svg";
import Lottie from "react-lottie";
import * as animationData from "../img/sign.json";

export const Sign = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="w-screen h-screen flex justify-evenly items-center">
      <div className="w-auto h-[576px]">
        <button className="rounded-full w-[40px] h-[40px] bg-gray-400 flex justify-center items-center">
          <img src={arrow} className="w-[30px] h-[30px]" alt="" />
        </button>
      </div>
      <div>
        <Lottie
          height={600}
          width={600}
          options={defaultOptions}
          isClickToPauseDisabled={true}
        />
      </div>
      <div>
        <div>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Sign;
