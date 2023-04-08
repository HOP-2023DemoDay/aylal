import React from "react";
import { useState } from "react";
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

  const [person, setPerson] = useState(true);

  return (
    <div className="w-screen h-screen flex justify-evenly items-center bg-[#F8F8F8]">
      <div className="w-auto h-[576px]">
        <button className="rounded-full w-[40px] h-[40px] bg-[#295943] flex justify-center items-center">
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
      <div className="gap-[20px] flex flex-col">
        <div className="flex flex-row justify-center items-center gap-[10px]">
          <button
            className="flex flex-col gap-[8px] justify-center items-center"
            onClick={() => setPerson(true)}
          >
            <div
              className={`w-[30px] h-[30px] bg-[#295943] rounded-full ${
                person === true ? "" : "opacity-50"
              }`}
            />
            <p
              className={`text-[#295943] font-500  ${
                person === true ? "" : "opacity-50"
              }`}
            >
              Individual
            </p>
          </button>
          <div className="w-[232px] h-[2px] bg-[#295943]"></div>
          <button
            className="flex flex-col gap-[8px] justify-center items-center"
            onClick={() => setPerson(false)}
          >
            <div
              className={`w-[30px] h-[30px] bg-[#295943] rounded-full ${
                person === true ? "opacity-50" : ""
              }`}
            />
            <p
              className={`text-[#295943] font-500  ${
                person === true ? "opacity-50" : ""
              }`}
            >
              Company
            </p>
          </button>
        </div>
        <div className="w-[687px] h-[576px] content-evenly bg-white rounded-[24px] flex flex-col justify-evenly items-center">
          <div className="flex">
            <button className="w-[302px] h-[56px] opacity-50 bg-[#295943] rounded-l-[15px] text-white font-500 text-[25px]">
              Sign up
            </button>
            <button className="w-[302px] h-[56px] bg-[#295943] rounded-r-[15px] text-white font-500 text-[25px]">
              Sign in
            </button>
          </div>
          <p className="font-500 text-[32px] text-[#295943]">Sign in</p>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col items-start">
              <p className="font-400 text-[16px] text-[#666666]">Email</p>
              <input className="h-[56px] w-[459px] border-slate-300 border-2 rounded-2xl" />
            </div>
            <div className="flex flex-col items-start">
              <p className="font-400 text-[16px] text-[#666666]">Password</p>
              <input className="h-[56px] w-[459px] border-slate-300 border-2 rounded-2xl" />
            </div>
            <button className="w-[459px] h-[56px] bg-[#43B97F] rounded-full font-400 text-white text-[25px] text-[#295943]">
              Sign in
            </button>
          </div>
          <div className="flex justify-start items-center gap-3 w-[459px]">
            <input
              className="w-[24px] h-[24px] text-white accent-[#43B97F] bg-white rounded-full"
              type="checkbox"
            />
            <p className="font-400 text-[24px] text-[#333333]">Remember me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
