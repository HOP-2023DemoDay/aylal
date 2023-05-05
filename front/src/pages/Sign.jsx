import React, { useRef } from "react";
import { useState } from "react";
import arrow from "../img/arrow.svg";
import Lottie from "react-lottie";
import * as animationData from "../img/sign.json";
import showpng from "../img/show.svg";
import hidepng from "../img/hide.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Sign = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const navigate = useNavigate();

  const [person, setPerson] = useState(true);
  const [signin, setSignin] = useState(true);
  const [hide, setHide] = useState(false);

  const email = useRef();
  const password = useRef();
  const username = useRef();

  const buttonclick = () => {
    if (signin === true) {
      if (person === true) {
        axios
          .post("http://localhost:8000/users/signin", {
            password: password.current.value,
            email: email.current.value,
          })
          .then(function (response) {
            if (response.status === 201) {
              navigate("/");
            }
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        axios
          .post("http://localhost:8000/companyusers/signin", {
            password: password.current.value,
            businessEmail: email.current.value,
          })
          .then(function (response) {
            if (response.status === 201) {
              navigate("/");
            }
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    } else {
      if (person === true) {
        axios
          .post("http://localhost:8000/users/signup", {
            password: password.current.value,
            email: email.current.value,
            username: username.current.value,
          })
          .then(function (response) {
            if (response.status === 201) {
              console.log("nice");
              setSignin(true);
            }
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        axios
          .post("http://localhost:8000/companyusers/signup", {
            password: password.current.value,
            businessEmail: email.current.value,
            companyName: username.current.value,
          })
          .then(function (response) {
            if (response.status === 201) {
              console.log("nice");
              setSignin(true);
            }
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  };

  return (
    <div className="w-screen h-[104.5vh] flex justify-evenly overflow-hidden items-center bg-White  mt-[-15vh] lg:h-[115vh] md:h-[115vh] sm:h-[115vh] ">
      <div className="w-auto h-[576px]">
        <Link
          to="/"
          className="rounded-full w-auto h-auto bg-transparent flex justify-center items-center"
        >
          <img
            src={arrow}
            className="w-[30px] h-[30px] 2xl:w-[45px] 2xl:h-[45px] xl:w-[45px] xl:h-[45px] lg:w-[45px] lg:h-[45px] md:w-[45px] md:h-[45px] sm:w-[45px] sm:h-[45px] "
            alt=""
          />
        </Link>
      </div>
      <div className="mt-[70px] 2xl:block xl:block lg:hidden  md:hidden  sm:hidden hidden 2xl:ml-[-30vw] xl:ml-[-10vw]">
        <Lottie
          height={700}
          width={700}
          options={defaultOptions}
          isClickToPauseDisabled={true}
        />
      </div>

      <div className="gap-[20px] flex flex-col md:mt-[15vh] sm:mt-[20vh] ml-[-25vw] 2xl:ml-[-25vw] xl:ml-[-7.5vw] lg:ml-[-20vw] md:ml-[-14vw] sm:ml-[-10vw]  ">
        <div className="flex flex-row justify-center items-center gap-[10px] xl:mt-[10vh] mt-[20vh]  xl:w-auto xl:mt-0 2xl:w-auto 2xl:mt-0 lg:w-auto lg:mt-20vh md:w-auto md:mt-0 sm:w-auto sm:mt-0 w-[295px]">
          <button
            className="flex flex-col gap-[8px] justify-center text-Poppins items-center"
            onClick={() => setPerson(true)}
          >
            <div
              className={`w-[30px] h-[30px] bg-GreenText rounded-full ${
                person === true ? "" : "opacity-50"
              }`}
            />
            <p
              className={`text-GreenText font-500 font-Poppins ${
                person === true ? "" : "opacity-50"
              }`}
            >
              Individual
            </p>
          </button>
          <div className="w-[232px] h-[2px] bg-GreenText"></div>
          <button
            className="flex flex-col gap-[8px] justify-center items-center"
            onClick={() => setPerson(false)}
          >
            <div
              className={`w-[30px] h-[30px] bg-GreenText rounded-full ${
                person === true ? "opacity-50" : ""
              }`}
            />
            <p
              className={`text-GreenText font-500  ${
                person === true ? "opacity-50" : ""
              }`}
            >
              Company
            </p>
          </button>
        </div>
        {/* flex flex-col justify-center items-center */}
        <div className="xl:w-[687px] gap-[0.7vw] 2xl:w-[687px] lg:w-[687px] md:w-[667px] sm:w-[647px] h-[576px] content-evenly 2xl:bg-white xl:bg-white lg:bg-white md:bg-white sm:bg-white rounded-[24px] flex flex-col justify-start items-center w-[275px]">
          <div className="flex mt-[5vh]">
            <button
              className={`xl:w-[302px] xl:text-[25px] 2xl:w-[302px] 2xl:text-[25px] lg:w-[302px] lg:text-[25px] md:w-[282px] md:text-[25px] sm:w-[242px] sm:text-[25px] h-[56px] bg-GreenText rounded-l-[15px] text-white font-Poppins font-500 text-[20px] w-[100px] ${
                signin === true ? "opacity-50" : ""
              }`}
              onClick={() => setSignin(false)}
            >
              Sign up
            </button>
            <button
              className={`xl:w-[302px] xl:text-[25px] 2xl:w-[302px] 2xl:text-[25px] lg:w-[302px] lg:text-[25px] md:w-[282px]  md:text-[25px] sm:w-[242px] sm:text-[25px] h-[56px] bg-GreenText rounded-r-[15px] font-Poppins text-white font-500 text-[20px] w-[100px] ${
                signin === true ? "" : "opacity-50"
              }`}
              onClick={() => setSignin(true)}
            >
              Sign in
            </button>
          </div>
          <p className="font-500 text-[32px] text-GreenText font-Poppins">
            {signin === true ? "Sign in" : "Sign up "}
          </p>
          <div className="flex flex-col gap-4">
            {/* <div
              className={`flex-col items-start ${
                signin === false && person === false ? "flex" : "hidden"
              }`}
            >
              <p
                className="font-400 text-[16px] font-Poppins text-SmallGrayText"
                type="email"
              >
                Company name
              </p>
              <input
                className="h-[56px] w-[459px] border-slate-300 border-2 rounded-2xl"
                ref={username}
              />
            </div> */}
            {/* <input className="h-[56px] xl:w-[459px] 2xl:w-[459px] lg:w-[459px] md:w-[439px] sm:w-[419px] border-slate-300 border-2 rounded-2xl w-[215px]" /> */}
            <div className="flex flex-col items-start">
              <p
                className="font-400 text-[16px] text-SmallGrayText font-Poppins"
                type="email"
              >
                {signin === false && person === false
                  ? "Business email"
                  : "Email"}
              </p>
              <input
                className="h-[56px] xl:w-[459px] 2xl:w-[459px] lg:w-[459px] md:w-[439px] sm:w-[419px] border-slate-300 border-2 rounded-2xl w-[215px]"
                ref={email}
              />
            </div>
            <div
              className={`flex-col items-start ${
                signin === true ? "hidden" : "flex"
              } `}
            >
              <p
                className="font-400 text-[16px] font-Poppins text-SmallGrayText"
                type="text"
              >
                {person === true ? "Username" : "Company name"}
              </p>
              <input
                className="h-[56px] xl:w-[459px] 2xl:w-[459px] lg:w-[459px] md:w-[439px] sm:w-[419px] border-2 rounded-2xl focus:outline-black font-2000 bg-[#C4C4C4] opacity-[30%] w-[215px]"
                ref={username}
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex w-full justify-between">
                <p className="font-400 text-[16px] font-Poppins text-SmallGrayText">
                  Password
                </p>
                <button
                  className="items-center gap-[5px] flex"
                  onClick={() => setHide(!hide)}
                >
                  <img
                    alt=""
                    className="w-[16px] h-[16px]"
                    src={hide === true ? showpng : hidepng}
                  />
                  <p className="font-400 text-[16px] text-SmallGrayText">
                    {hide === true ? "Show" : "Hide"}
                  </p>
                </button>
              </div>
              <input
                className="h-[56px] xl:w-[459px] 2xl:w-[459px] lg:w-[459px] md:w-[439px] sm:w-[419px] border-slate-300 border-2 rounded-2xl w-[215px]"
                type={hide === true ? "password" : "text"}
                ref={password}
              />
            </div>
            <button
              className="xl:w-[459px] 2xl:w-[459px] lg:w-[459px] md:w-[439px] sm:w-[419px] h-[56px] bg-Button font-Poppins rounded-full font-400 text-white text-[25px] text-GreenText w-[215px]"
              onClick={buttonclick}
            >
              {signin === true ? "Sign in" : "Sign up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
