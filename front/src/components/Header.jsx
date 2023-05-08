import {React,useState} from "react";
import { Link, useLocation } from "react-router-dom";
import drop from "../img/hun.png"

export const Header = () => {

    const [toggleDrop, setToggleDrop] = useState(false);
  const styles = {
    drop: {
      backgroundImage: `url(${drop})`,
      height: "70px",
      width: "70px",
      marginTop: "50px",
    },
  };

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
      <div>
           <button
            onClick={() => {
              setToggleDrop(!toggleDrop);
              console.log(toggleDrop);
            }}
            className="sm:hidden flex bg-repeat"
            style={styles.drop}
          ></button>
          {toggleDrop ? (
            <div className="w-[180px] h-[150px] mt-[20px] flex flex-col justify-between">
         
          <Link
            to="/Profile"
            className="text-sm    flex "
          >
            Profile
          </Link>
          <hr />
           <Link to="/Login" className="text-sm  font-normal">
            Log out
          </Link>
          <hr />
            </div>
          ) : (
            ""
          )}
        </div>
    </div>
  );
};

export default Header;