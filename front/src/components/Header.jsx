import { React, useState } from "react";
import { Link } from "react-router-dom";
import drop from "../img/hun.png";

export const Header = () => {

  const [toggleDrop, setToggleDrop] = useState(false);

  const style = {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  };

  return (
    <div
    style={style}
      className={
        "z-10 flex flex-row items-center justify-between w-screen font-Poppins 2xl:px-[5vw] xl:px-[4vw] lg:px-[3vw] md:px-[3vw] px-[1vw] fixed overflow-hidden"
      }
    >
      <Link to="/" className={`text-[33px] font-extralight text-white ${toggleDrop === true ? "mb-[5vh]" : ""}`}>
        travelaja
      </Link>
      <div className="block">
        <button
          onClick={() => {
            setToggleDrop(!toggleDrop);
            console.log(toggleDrop);
          }}
          className="sm:hidden flex"
        > <img src={drop} alt="img" className="my-[1vh]"/></button>
        {toggleDrop ? (
          <div className="w-[50px] h-[5vh] flex flex-col justify-between text-white ml-[-1vw] 2xl:ml-[0.1vw]">
            <Link to="/Profile" className="text-sm flex">
              Profile
            </Link>
            <hr />
            <Link to="/Login" className="text-sm w-[20vw] font-normal">
              Log out
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;