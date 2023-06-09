import React from "react";
import Img2 from "../img/img2.svg"
import Arrow from "../img/ArrowDay.svg"
import clsx from "clsx";


const style = {
  too: "text-Button font-Poppins text-[14px] font-light",
};

export const Hutulbur = () => {
  return (
    <div className="h-[188px] w-[514px] ml-[2vw] rounded-[22px] shadow-md grid grid-rows-4  smmsm:w-[414px]">

      <img className="h-[162px] w-[225px] mt-[1vh] ml-[11px] bg-current rounded-lg rounded-[22px] bg-repeat  smmsm:w-[125px]" src={Img2} alt="img2"  />

      <div className="w-[257px] ml-[361px] mt-[-20px]  smmsm:ml-[261px]">

        <p className="ml-[-105px] font-Poppins font-bold text-[19.2px] text-DarkText  smmsm:text-[18px] smmsm:w-[220px]">Taman Nasional Bunaken</p>
        <p className="ml-[-105px] font-Poppins font-normal text-[18px] w-[255px] mt-[3px] smmsm:text-[16px] smmsm:w-[220px] smmsm:my-[10px]">where can i go? 5 amazing countries that are open right now</p>

        <div className="ml-[-105px] w-[250px] flex flex-wrap smmsm:w-[240px] smmsm:ml-[-120px]">
            <img src={Arrow} className="w-[22px] h-[27px]" alt="Arrow" />
            <p className={clsx(style.too , "font-normal text-DarkText")}>9 days for trip</p>
            <img src={Img2} className="w-[22px] h-[27px] bg-DarkText ml-[3px] rounded-full" alt="img" />
            <p className={clsx(style.too , "font-bold text-GreenText")}>CompanyName</p>
        </div>
      </div>
    </div>
  );
};
export default Hutulbur;
