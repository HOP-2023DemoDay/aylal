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
      path: "/Home",
      value: "Home",
    },
    {
      path: "/CompanyInfo",
      value: "CompanyInfo",
    },
  ];
  return (
    <div
      className={`flex flex-row items-center justify-between w-full md:pl-5 md:pr-5 lg:pl-10 lg:pr-10 xl:pl-20 xl:pr-20 2xl:pl-20 2xl:pr-20 fixed font-Poppins sm:text-xs smm:text-xs md:text-sm ${
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
      <div className="flex gap-x-1 sm:gap-x-2 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-10">
        {headerPages.map(({ path, value }, index) => (
          <Link
            className={
              pathname === path
                ? "text-green-500 font-bold underline decoration-2"
                : ""
            }
            to={path}
          >
            {value}
          </Link>
        ))}
      </div>
      <div className="flex gap-x-1 sm:gap-x-2 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-10">
        <button
          className={`font-bold ${
            pathname === "/" ? "text-white" : "text-black"
          }`}
        >
          Logout
        </button>
        <button
          className={`font-bold ${
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
