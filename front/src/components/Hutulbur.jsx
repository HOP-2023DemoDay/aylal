import React from "react";
import Img2 from "../img/img2.svg"
import Arrow from "../img/ArrowDay.svg"

export const Hutulbur = () => {
  return (
    <div className=" max-w-sm h-[65vw] w-[55vw] flex flex-wrap ml-[2vw] rounded-[22px] shadow-md sm:shadow-lg sm:w-[25vw] sm:h-[18vh]">

      <img className="max-w-sm h-[16vh] w-[60vw] mt-[1vh] bg-current rounded-lg ml-[0.5vw] rounded-[22px] bg-repeat sm:w-[8vw]" src={Img2} alt="img2"  />

      <div className="sm:w-[12vw] sm:mt-[3vh] sm:ml-[1vw] w-[50vw] ml-[5vw] mt-[2vh]">

        <p className=" font-Poppins font-bold text-[2vh] text-DarkText sm:text-[19px]">Taman Nasional Bunaken</p>
        <p className=" font-Poppins font-normal text-[1.5vh] mt-[1vh] sm:text-[18px]">where can i go? 5 amazing countries that are open right now</p>

        <div className="sm:w-[15vw] w-[50vw] flex flex-wrap mt-[1.5vh]">
            <img src={Arrow} className="sm:w-[18px] sm:h-[18px] w-[10px] h-[10px] mt-[10px]" alt="Arrow" />
            <p className=" mt-[10px] font-Poppins font-normal text-[9px] ml-[0.2vw] text-DarkText sm:text-[18px]">9 days for trip</p>
            <img src={Img2} className="sm:w-[30px] sm:h-[30px] w-[22px] h-[27px] bg-DarkText ml-[0.8vw] rounded-full" alt="img" />
            <p className="mt-[10px] font-Poppins font-bold text-[9px] ml-[0.2vw] text-GreenText sm:text-[18px]">CompanyName</p>
        </div>

      </div>
    </div>
  );
};
export default Hutulbur;
