import React from "react";
import ig from "../assets/ig.svg";
import fb from "../assets/fb.svg";
import twitter from "../assets/twitter.svg";
import something from "../assets/something.svg";
import github from "../assets/github.svg";
import clsx from "clsx";

const style = {
  comp: "mt-[20px] flex flex-col justify-between h-[150px]",
  last: "2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-1/4 w-1/3",
  mllast:"2xl:ml-[0px] xl:ml-[0px] lg:ml-[0px] md:ml-[0px] sm:ml-[0px] 2xl:mt-[0px] xl:mt-[0px] lg:mt-[0px] md:mt-[0px] sm:mt-[0px] mt-[210px] ml-[-83vw]",
};

export const Footer = () => {
  return (
    <div className="font-Poppins bg-GreenText text-white w-screen overflow-hidden p-[30px] sm:text-xs sm:p-[20px] md:p-[30px] lg:p-[40px]">
      <div className="flex flex-row">
        <div className={clsx(style.last)}>
          <p className="font-bold text-[19px]">Links</p>
          <div className={clsx(style.comp)}>
            <p>Discover</p>
            <p>Special Deals</p>
            <p>Services</p>
            <p>Community</p>
            <p>About Us</p>
          </div>
        </div>
        <div className={clsx(style.last)}>
          <p className="font-bold text-[19px]">Services</p>
          <div className={clsx(style.comp)}>
            <p>About Us</p>
            <p>Blog & Articles</p>
            <p>Term and Condition</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className={clsx(style.last)}>
          <p className="font-bold text-[19px]">Contact</p>
          <div className={clsx(style.comp)}>
            <p>Address: Jl.Codelaras No.205A</p>
            <p>Kediri, Pare AG17</p>
            <p>Phone: 123 456 7890</p>
            <p>Email: myagungperdana@gmail.com</p>
            <p>Maps: Kediri, East java </p>
          </div>
        </div>
        <div className={clsx(style.last, style.mllast)}>
          <p className="font-bold text-[19px]">Ikuti Kami</p>
          <div className="mt-[20px] flex flex-row w-[150px] justify-between">
            <img src={ig} alt="" />
            <img src={fb} alt="" />
            <img src={twitter} alt="" />
            <img src={something} alt="" />
            <img src={github} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
