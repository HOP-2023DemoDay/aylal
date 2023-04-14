import React from "react";
import Img2 from "../img/img2.svg"
import Arrow from "../img/ArrowDay.svg"

export const Hutulbur = () => {
  return (
    <div className="h-[18vh] w-[25vw] shadow-lg flex flex-wrap ml-[2vw] rounded-[22px]">

      <img className="h-[16vh] w-[8vw] mt-[1vh] bg-current rounded-lg ml-[0.5vw] rounded-[22px] bg-repeat" src={Img2} alt="img2"  />

      <div className="w-[12vw] ml-[1vw] mt-[3vh]">

        <p className=" font-Poppins font-bold font-[19px] text-DarkText">Taman Nasional Bunaken</p>
        <p className=" font-Poppins font-normal font-[18px] mt-[1vh]">where can i go? 5 amazing countries that are open right now</p>

        <div className="w-[15vw] flex flex-wrap mt-[1.5vh]">
            <img src={Arrow} className="w-[18px] h-[18px]" alt="Arrow" />
            <p className=" font-Poppins font-normal font-[14px] ml-[0.2vw] text-DarkText">9 days for trip</p>
            <img src={Img2} className="w-[27px] h-[27px] bg-DarkText ml-[0.8vw] rounded-full" alt="img" />
            <p className=" font-Poppins font-bold font-[10px] ml-[0.2vw] text-GreenText">CompanyName</p>
        </div>

      </div>
    </div>
  );
};
export default Hutulbur;
