import React from "react";
import ig from "../assets/ig.svg";
import fb from "../assets/fb.svg";
import twitter from "../assets/twitter.svg";
import something from "../assets/something.svg";
import github from "../assets/github.svg";

export const Footer = () => {
  return (
    <div className="font-Poppins bg-[#295943] text-white w-screen overflow-hidden p-[50px] sm:text-xs smm:text-xs smm:p-[10px] sm:p-[20px] md:p-[30px] lg:p-[40px]">
      <div className="flex flex-row">
        <div className="w-1/4 smm:hidden ">
          <p className="text-[33px] text-[33px]">travelaja</p>
          <p className="mt-[20px]  pr-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel
          </p>
        </div>
        <div className="w-1/4">
          <p className="font-bold text-[19px]">Links</p>
          <div className="mt-[20px] flex flex-col justify-between h-[150px]">
            <p>Discover</p>
            <p>Special Deals</p>
            <p>Services</p>
            <p>Community</p>
            <p>About Us</p>
          </div>
        </div>
        <div className="w-1/4">
          <p className="font-bold text-[19px]">Services</p>
          <div className="mt-[20px] flex flex-col justify-between h-[150px]">
            <p>About Us</p>
            <p>Blog & Articles</p>
            <p>Term and Condition</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="w-1/4">
          <p className="font-bold text-[19px]">Contact</p>
          <div className="mt-[20px] flex flex-col justify-between h-[150px]">
            <p>Address: Jl.Codelaras No.205A</p>
            <p>Kediri, Pare AG17</p>
            <p>Phone: 123 456 7890</p>
            <p>Email: myagungperdana@gmail.com</p>
            <p>Maps: Kediri, East java </p>
          </div>
        </div>
      </div>
      <div className="w-1/4 pt-[10px]">
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
  );
};
