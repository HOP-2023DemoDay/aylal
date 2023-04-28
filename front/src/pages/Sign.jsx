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
          <img src={arrow} className="w-[45px] h-[45px]  " alt="" />
        </Link>
      </div>
      <div className="mt-[70px] lg:ml-[-95vw] md:ml-[-110vw] sm:ml-[-110vw] ml-[-180vw] ">
        <Lottie
          height={700}
          width={700}
          options={defaultOptions}
          isClickToPauseDisabled={true}
        />
      </div >
      <div className="gap-[20px] flex flex-col md:mt-[15vh] sm:mt-[20vh]">
        <div className="flex flex-row justify-center items-center gap-[10px] ">
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
        <div className="w-[687px] h-[576px] gap-[20px] p-[30px] content-evenly bg-white rounded-[24px] flex flex-col justify-start items-center">
          <div className="flex">
            <button
              className={`w-[302px] h-[56px] bg-GreenText rounded-l-[15px] text-white font-Poppins font-500 text-[25px] ${
                signin === true ? "opacity-50" : ""
              }`}
              onClick={() => setSignin(false)}
            >
              Sign up
            </button>
            <button
              className={`w-[302px] h-[56px] bg-GreenText rounded-r-[15px] font-Poppins text-white font-500 text-[25px] ${
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
                className="h-[56px] w-[459px] border-slate-300 border-2 rounded-2xl"
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
                className="h-[56px] w-[459px] border-slate-300 border-2 rounded-2xl"
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
                className="h-[56px] w-[459px] border-slate-300 border-2 rounded-2xl"
                type={hide === true ? "password" : "text"}
                ref={password}
              />
            </div>
            <button
              className="w-[459px] h-[56px] bg-Button font-Poppins rounded-full font-400 text-white text-[25px] text-GreenText"
              onClick={buttonclick}
            >
              {signin === true ? "Sign in" : "Sign up"}
            </button>
          </div>
          <div
            className={`justify-start items-center gap-3 w-[459px] ${
              signin === false ? "hidden" : "flex"
            }`}
          >
            <input
              className="w-[24px] h-[24px] text-white accent-Button bg-white rounded-full"
              type="checkbox"
            />
            <p className="font-400 text-[24px] font-Poppins text-MediumDarkText">
              Remember me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
