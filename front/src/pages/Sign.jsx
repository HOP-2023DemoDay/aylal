import React from "react";
import { useState } from "react";
import arrow from "../img/arrow.svg";
import Lottie from "react-lottie";
import * as animationData from "../img/sign.json";
import showpng from "../img/show.svg";
import hidepng from "../img/hide.svg";
import { Link } from "react-router-dom";

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
  const [signin, setSignin] = useState(true);
  const [hide, setHide] = useState(false);

  return (
    <div className="w-screen h-screen flex justify-evenly items-center bg-[#F8F8F8]">
      <div className="w-auto h-[576px]">
        <Link
          to="/Home"
          className="rounded-full w-auto h-auto bg-transparent flex justify-center items-center"
        >
          <img src={arrow} className="w-[45px] h-[45px]" alt="" />
        </Link>
      </div>
      <div className="mt-[70px] hidden xl:flex">
        <Lottie
          height={700}
          width={700}
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
        <div
          className={`w-[687px] h-[576px] content-evenly bg-white rounded-[24px] flex flex-col justify-start items-center ${
            signin === false && person === false
              ? "p-[15px] gap-0"
              : "gap-[20px] p-[30px]"
          }`}
        >
          <div className="flex">
            <button
              className={`w-[302px] h-[56px] bg-[#295943] rounded-l-[15px] text-white font-500 text-[25px] ${
                signin === true ? "opacity-50" : ""
              }`}
              onClick={() => setSignin(false)}
            >
              Sign up
            </button>
            <button
              className={`w-[302px] h-[56px] bg-[#295943] rounded-r-[15px] text-white font-500 text-[25px] ${
                signin === true ? "" : "opacity-50"
              }`}
              onClick={() => setSignin(true)}
            >
              Sign in
            </button>
          </div>
          <p className="font-500 text-[32px] text-[#295943]">
            {signin === true ? "Sign in" : "Sign up "}
          </p>
          <div
            className={`flex flex-col ${
              signin === false && person === false ? "gap-4" : "gap-7"
            }`}
          >
            <div
              className={`flex-col items-start ${
                signin === false && person === false ? "flex" : "hidden"
              }`}
            >
              <p className="font-400 text-[16px] text-[#666666]" type="email">
                Company name
              </p>
              <input className="h-[56px] w-[459px] border-slate-300 border-2 rounded-2xl" />
            </div>
            <div
              className={`flex-col items-start ${
                signin === false && person === false ? "flex" : "hidden"
              }`}
            >
              <p className="font-400 text-[16px] text-[#666666]" type="email">
                Ажлын чиг үүрэг
              </p>
              <input className="h-[56px] w-[459px] border-slate-300 border-2 rounded-2xl" />
            </div>
            <div className="flex flex-col items-start">
              <p className="font-400 text-[16px] text-[#666666]" type="email">
                {signin === false && person === false
                  ? "Business email"
                  : "Email"}
              </p>
              <input className="h-[56px] w-[459px] border-slate-300 border-2 rounded-2xl" />
            </div>
            <div
              className={`flex-col items-start ${
                signin === true ? "hidden" : "flex"
              } ${signin === false && person === false ? "hidden" : "flex"}`}
            >
              <p className="font-400 text-[16px] text-[#666666]" type="text">
                Username
              </p>
              <input className="h-[56px] w-[459px] border-slate-300 border-2 rounded-2xl" />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex w-full justify-between">
                <p className="font-400 text-[16px] text-[#666666]">Password</p>
                <button
                  className="items-center gap-[5px] flex"
                  onClick={() => setHide(!hide)}
                >
                  <img
                    alt=""
                    className="w-[16px] h-[16px]"
                    src={hide === true ? showpng : hidepng}
                  />
                  <p className="font-400 text-[16px] text-[#666666]">
                    {hide === true ? "Show" : "Hide"}
                  </p>
                </button>
              </div>
              <input
                className="h-[56px] w-[459px] border-slate-300 border-2 rounded-2xl"
                type={hide === true ? "password" : "text"}
              />
            </div>
            <button className="w-[459px] h-[56px] bg-[#43B97F] rounded-full font-400 text-white text-[25px] text-[#295943]">
              {signin === true ? "Sign in" : "Sign up"}
            </button>
          </div>
          <div
            className={`justify-start items-center gap-3 w-[459px] ${
              signin === false ? "hidden" : "flex"
            }`}
          >
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
