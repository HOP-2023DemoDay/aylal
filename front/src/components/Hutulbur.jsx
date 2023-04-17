import React from "react";
import Img2 from "../img/img2.svg"
import Arrow from "../img/ArrowDay.svg"
import clsx from "clsx";


const style = {
  too: "text-Button font-Poppins text-[15px] font-light sm:text-5xl md:text-md sm:font-bold sm:text-GreenText lg:text-[16px]",
};

export const Hutulbur = () => {
  return (
    <div className=" max-w-sm h-[18vw] w-[55vw] flex flex-wrap ml-[2vw] rounded-[22px] shadow-md sm:shadow-lg sm:w-[25vw] sm:h-[18vh] md:w-[35vw] md:h-[40vh] lg:h-[35vh] lg:w-[35vh]">

      <img className="max-w-sm h-[16vh] w-[55vw] mt-[1vh] bg-current rounded-lg rounded-[22px] bg-repeat sm:w-[8vw]" src={Img2} alt="img2"  />

      <div className="sm:w-[12vw] sm:mt-[3vh] sm:ml-[1vw] md:ml-[2vw] md:mt-[15vh] w-[50vw] ml-[5vw] mt-[2vh] lg:ml-[2vw]">

        <p className=" ml-[-4vw] md:ml-[2vw] font-Poppins font-bold text-[2vh] text-DarkText sm:text-[19px] md:mt-[-15vh] mt-[-2vh]">Taman Nasional Bunaken</p>
        <p className=" ml-[-4vw] md:ml-[2vw] font-Poppins font-normal text-[1.5vh] w-[13vw] mt-[1vh] sm:text-[18px] md:w-[33vw] lg:w-[30vh]">where can i go? 5 amazing countries that are open right now</p>

        <div className="sm:w-[15vw] md:ml-[2vw] w-[50vw] flex flex-wrap mt-[1.5vh] ml-[-4vw]">
            <img src={Arrow} className="sm:w-[18px] sm:h-[18px] w-[10px] h-[10px] mt-[10px]" alt="Arrow" />
            <p className={clsx(style.too , "font-normal text-DarkText")}>9 days for trip</p>
            <img src={Img2} className="sm:w-[30px] sm:h-[30px] w-[22px] h-[27px] bg-DarkText ml-[0.8vw] rounded-full" alt="img" />
            <p className={clsx(style.too , "font-bold text-GreenText")}>CompanyName</p>
        </div>
      </div>
    </div>
  );
};
export default Hutulbur;
