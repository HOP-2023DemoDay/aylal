import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();
  const headerPages = [
    {
      path: "/",
      value: "Landing",
    },
    {
      path: "/CompanyInfo",
      value: "CompanyInfo",
    },
  ];
  return (
    <div
      className={`flex flex-row items-center justify-between w-screen absolute font-Poppins 2xl:px-[5vw] xl:px-[4vw] lg:px-[3vw] md:px-[3vw] px-[1vw] ${
        pathname === "/" ? "text-white" : "text-black"
      }`}
    >
      <p
        className={`text-[33px] font-extralight  ${
          pathname === "/" ? "text-white" : "text-black"
        }`}
      >
        travelaja
      </p>
      <div className="flex gap-x-1 2xl:text-[20px] xl:text-[20px] lg:text-[16px] md:text-[16px text-[10px]">
        {headerPages.map(({ path, value }, index) => (
          <Link
            className={
              pathname === path
                ? "text-green-500 font-bold underline decoration-2 2xl:text-[20px] xl:text-[20px] lg:text-[16px] md:text-[16px text-[10px]"
                : ""
            }
            to={path}
          >
            {value}
          </Link>
        ))}
      </div>
      <div className="flex gap-x-1">
        <button
          className={`font-bold 2xl:text-[20px] xl:text-[20px] lg:text-[16px] md:text-[16px text-[10px] ${
            pathname === "/" ? "text-white" : "text-black"
          }`}
        >
          Logout
        </button>
        <button
          className={`font-bold 2xl:text-[20px] xl:text-[20px] lg:text-[16px] md:text-[16px text-[10px] ${
            pathname === "/" ? "text-white" : "text-black"
          }`}
        >
          Username
        </button>
      </div>
    </div>
  );
};

export default Header;
